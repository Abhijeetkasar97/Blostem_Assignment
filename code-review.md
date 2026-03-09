# Code Review Findings

Issue 1:
File: App.jsx
Problem: Missing error handling for API calls.
Fix: Added try/catch block around axios calls.

Issue 2:
File: Task List rendering
Problem: AI originally forgot the `key` prop in list items.
Fix: Added key={task.id}.

Issue 3:
File: POST /tasks route
Problem: AI did not validate empty title properly.
Fix: Added `title.trim()` validation.

Issue 4:
Hardcoded server port.
Fix: Used environment variable.