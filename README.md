# WhereAmI

Copies the file path + line number to your clipboard instead of the code itself. Relative or absolute.

Built this because I kept manually typing out file references when talking to AI coding agents. Now it's just a right-click or a shortcut.

## What it does

- `src/utils/helper.ts:42` - relative path
- `/Users/you/project/src/utils/helper.ts:42` - absolute path
- `src/utils/helper.ts:42-58` - select multiple lines, get a range
- Multi-cursor gives you one line per cursor

## How to use it

Right-click in the editor and you'll see a **WhereAmI** submenu with both options.

Or hit `Cmd+Shift+P` / `Ctrl+Shift+P` and search for:

- `WhereAmI: Copy Relative Path`
- `WhereAmI: Copy Full Path`

### Shortcuts

| Command | Windows / Linux | macOS |
|---|---|---|
| Copy Relative Path | `Ctrl+Shift+L` | `Cmd+Shift+L` |
| Copy Full Path | `Ctrl+Alt+Shift+L` | `Cmd+Alt+Shift+L` |

## Change the shortcuts

Open **Preferences: Open Keyboard Shortcuts (JSON)** and add whatever you prefer:

```json
[
  {
    "key": "ctrl+shift+c",
    "command": "whereami.copyRelative",
    "when": "editorTextFocus"
  },
  {
    "key": "ctrl+alt+c",
    "command": "whereami.copyAbsolute",
    "when": "editorTextFocus"
  }
]
```

You can also do it through the GUI - open **Preferences: Open Keyboard Shortcuts**, search for `whereami`, click the pencil icon.

### Command IDs

| Command ID | Description |
|---|---|
| `whereami.copyRelative` | Workspace-relative path + line number(s) |
| `whereami.copyAbsolute` | Absolute path + line number(s) |

## Examples

| What you do | What you get |
|---|---|
| Cursor on line 42 (relative) | `src/utils/helper.ts:42` |
| Cursor on line 42 (absolute) | `/Users/you/project/src/utils/helper.ts:42` |
| Select lines 42-58 | `src/utils/helper.ts:42-58` |
| Multi-cursor on lines 10, 25, 40 | `src/utils/helper.ts:10`<br>`src/utils/helper.ts:25`<br>`src/utils/helper.ts:40` |

## License

MIT
