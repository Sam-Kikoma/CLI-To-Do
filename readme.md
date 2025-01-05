# CLI To-Do Application

## Prerequisites

- Node.js (v14 or higher)
- npm (Node Package Manager)

## Installation

1. Clone the repository:

```bash
git clone <repository_url>
cd <repository_name>
```

2. Install dependencies:

```bash
npm install
```

3. Build the TypeScript code:

```bash
npm run build
```

4. Ensure `data.json` exists in the root directory. If not, create an empty file named `data.json`:

```json
[]
```

## Usage

### Commands

#### Create a To-Do

Run the following command to create a new task:

```bash
node index.js create
```

You will be prompted to input the task name and its due date.

#### List To-Dos

Display all tasks with their statuses and due dates:

```bash
node index.js list
```

#### Update a To-Do

Update the status of a task (mark as completed or not completed):

```bash
node index.js update
```

You will be prompted to input the index of the task to update.

#### Delete a To-Do

Delete a task from the list:

```bash
node index.js delete
```

You will be prompted to input the index of the task to delete.
