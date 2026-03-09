# Reflection on AI-Assisted Development

1. Moments where AI saved time

The first major time saving moment occurred during project setup...
Using Cursor I asked it to generate an Express server with CORS enabled and a basic API structure...

The second moment occurred while building the React task list component...

2. Moments where AI generated incorrect code

One issue occurred when AI generated the PATCH route...
The code assumed the task always existed and did not handle the case where the ID was invalid...

Another issue happened in the React component where the AI forgot to add the key prop...

3. Workflow differences

Working with an AI editor significantly changed my workflow...

4. Advice for junior developers

Junior developers must be careful not to blindly trust AI generated code...

# Reflection on AI-Assisted Development

## Overview

During this project, I used AI tools to help generate parts of the React Task Manager application. The AI helped speed up development by providing initial code for components, API calls, and UI structure. However, reviewing the generated code showed that AI-generated code still requires careful human review.

---

## What Worked Well

AI was useful for quickly generating boilerplate code such as React components, API request functions, and UI layout. It helped reduce development time and provided a good starting point for building the application.

The AI also helped suggest improvements and explain errors when debugging issues like filtering tasks and fixing CSS layout problems.

---

## Issues Found in AI-Generated Code

While reviewing the code, several problems were discovered:

- Missing error handling in API requests
- Hardcoded API endpoints that reduced maintainability
- Potential runtime errors when using `tasks.filter`
- Lack of a loading state for asynchronous operations

These issues showed that AI-generated code is not always production-ready and requires careful review.

---

## Comparing AI Self-Review vs Manual Review

I asked an AI assistant to review the same code and identify possible issues. The AI identified some of the same problems, such as missing error handling and potential runtime errors.

However, manual review was still necessary to fully understand the context of the project and decide how to properly fix each issue.

This comparison showed that AI can assist with code reviews but should not replace human judgment.

---

## What I Learned

This assignment helped me understand several important software development practices:

- AI tools are helpful for generating code but should not be trusted blindly.
- Code reviews are essential for identifying bugs and improving code quality.
- Writing maintainable code requires proper error handling and configuration management.
- Human developers must still evaluate and improve AI-generated solutions.

---

## Conclusion

AI-assisted development can improve productivity, but developers must critically review and test AI-generated code. Combining AI tools with careful manual review leads to better and more reliable software.