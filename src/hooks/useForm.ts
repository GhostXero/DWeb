'use client';

import { useState, useCallback } from 'react';
import { z, ZodSchema } from 'zod';

export interface UseFormOptions<T> {
  initialValues: T;
  onSubmit: (values: T) => Promise<void> | void;
  schema?: ZodSchema<T>;
  validateOnChange?: boolean;
  validateOnBlur?: boolean;
}

export interface UseFormReturn<T> {
  values: T;
  errors: Record<string, string>;
  isSubmitting: boolean;
  isSubmitted: boolean;
  touched: Record<string, boolean>;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  handleBlur: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  handleSubmit: (e: React.FormEvent) => Promise<void>;
  reset: () => void;
  setFieldValue: (field: keyof T, value: any, shouldValidate?: boolean) => void;
  setInitialValue: (field: keyof T, value: any) => void;
  setFieldError: (field: keyof T, error: string) => void;
  clearErrors: () => void;
}

export function useForm<T extends Record<string, any>>({
  initialValues,
  onSubmit,
  schema,
  validateOnChange = false,
  validateOnBlur = true,
}: UseFormOptions<T>): UseFormReturn<T> {
  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  // Validate form values against schema
  const validate = useCallback((valuesToValidate: T): Record<string, string> => {
    if (!schema) return {};

    try {
      schema.parse(valuesToValidate);
      return {};
    } catch (error) {
      if (error instanceof z.ZodError && error.issues && Array.isArray(error.issues)) {
        return error.issues.reduce((acc, err) => {
          if (err && err.path && Array.isArray(err.path)) {
            const field = err.path.join('.');
            acc[field] = err.message || 'Ugyldig værdi';
          }
          return acc;
        }, {} as Record<string, string>);
      }
      return {};
    }
  }, [schema]);

  // Handle input changes
  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    // Handle checkbox inputs
    const newValue = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    
    setValues(prev => ({
      ...prev,
      [name]: newValue
    }));

    // Mark field as touched only if validating on change or if the field already has an error
    if (validateOnChange || errors[name]) {
      setTouched(prev => ({
        ...prev,
        [name]: true
      }));
    }

    // Validate on change if enabled
    if (validateOnChange && schema) {
      const newValues = { ...values, [name]: newValue };
      const validationErrors = validate(newValues);
      setErrors(validationErrors);
    }
  }, [values, validateOnChange, schema, validate]);

  // Handle field blur
  const handleBlur = useCallback((e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name } = e.target;
    
    // Mark field as touched only if validating on blur or if the field already has an error
    if (validateOnBlur || errors[name]) {
      setTouched(prev => ({
        ...prev,
        [name]: true
      }));
    }

    // Validate on blur if enabled
    if (validateOnBlur && schema) {
      const validationErrors = validate(values);
      setErrors(validationErrors);
    }
  }, [values, validateOnBlur, schema, validate]);

  // Handle form submission
  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all fields
    const validationErrors = validate(values);
    setErrors(validationErrors);
    
    // If there are validation errors, don't submit
    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);
    
    try {
      await onSubmit(values);
      setIsSubmitted(true);
      
      // Reset form on successful submission
      setValues(initialValues);
      setTouched({});
      setErrors({});
    } catch (error) {
      // Handle submission errors
      console.error('Form submission error:', error);
      setErrors({
        submit: error instanceof Error ? error.message : 'Der opstod en fejl under afsendelse.'
      });
    } finally {
      setIsSubmitting(false);
    }
  }, [values, validate, onSubmit, initialValues]);

  // Reset form to initial state
  const reset = useCallback(() => {
    setValues(initialValues);
    setErrors({});
    setIsSubmitted(false);
    setIsSubmitting(false);
    setTouched({});
  }, [initialValues]);

  // Set a specific field value
  const setFieldValue = useCallback((field: keyof T, value: any, shouldValidate = false) => {
    setValues(prev => ({
      ...prev,
      [field]: value
    }));
    
    // Only mark field as touched if we're validating or if the field already has an error
    if (shouldValidate || errors[field as string]) {
      setTouched(prev => ({
        ...prev,
        [field as string]: true
      }));
    }

    // Validate if schema exists and validation is requested
    if (schema && shouldValidate) {
      const newValues = { ...values, [field]: value };
      const validationErrors = validate(newValues);
      setErrors(validationErrors);
    }
  }, [values, schema, validate, errors]);

  // Set initial value without marking as touched or validating
  const setInitialValue = useCallback((field: keyof T, value: any) => {
    setValues(prev => ({
      ...prev,
      [field]: value
    }));
  }, []);

  // Set a specific field error
  const setFieldError = useCallback((field: keyof T, error: string) => {
    setErrors(prev => ({
      ...prev,
      [field as string]: error
    }));
  }, []);

  // Clear all errors
  const clearErrors = useCallback(() => {
    setErrors({});
  }, []);

  return {
    values,
    errors,
    isSubmitting,
    isSubmitted,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    reset,
    setFieldValue,
    setFieldError,
    clearErrors,
  };
}

// Hook for handling API-based forms
export function useApiForm<T extends Record<string, any>>(
  apiUrl: string,
  options: UseFormOptions<T> & {
    method?: 'POST' | 'PUT' | 'PATCH';
    onSuccess?: (data: any) => void;
    onError?: (error: string) => void;
  }
) {
  const { method = 'POST', onSuccess, onError, ...formOptions } = options;

  const handleSubmit = async (values: T) => {
    try {
      const response = await fetch(apiUrl, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Der opstod en fejl under afsendelse.');
      }

      onSuccess?.(data);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Der opstod en fejl under afsendelse.';
      onError?.(errorMessage);
      throw error;
    }
  };

  return useForm({
    ...formOptions,
    onSubmit: handleSubmit,
  });
}