/**
 * @file utils.ts
 * @description This file is intended to house utility functions that can be reused across the application.
 * Examples include data formatting functions, helper functions for common calculations, etc.
 *
 * AI Agent Instructions:
 * - When creating a new general-purpose utility function, add it here.
 * - Ensure functions are well-documented with JSDoc, explaining their purpose, parameters, and return values.
 * - Keep functions small, focused, and pure if possible (i.e., no side effects).
 * - If a utility is specific to a particular component or feature, consider co-locating it with that feature instead.
 * - Write clear AI instructions for any complex utility functions or those with specific usage patterns.
 * - Refer to `docs/ai/AI_CODING_GUIDELINES.md` for more detailed function creation guidelines.
 */

/**
 * AI Agent Instructions: This is an example of how a utility function might be structured and commented.
 * Replace this with actual utility functions as needed by the project.
 */

/**
 * A simple utility function to demonstrate the structure.
 * @param name - The name to include in the greeting.
 * @returns A greeting string.
 *
 * AI Agent Instructions:
 * - This function is for demonstration only. Remove or replace it.
 * - When adding new functions, ensure they are exported if they need to be used elsewhere.
 */
export const exampleUtility = (name: string): string => {
  // AI Agent Instructions: Log statements can be useful for debugging during development,
  // but consider removing or conditionally enabling them for production builds.
  console.log(`[Log from exampleUtility]: Generating greeting for ${name}`);
  return `Hello, ${name}! This is a utility function.`;
};

// AI Agent Instructions: Add other utility functions below, ensuring each is well-commented and exported if necessary.

