# Continue Offline Fork

This fork removes all network calls to `continue.dev` and PostHog so the VS Code extension can be built and used entirely offline.

## Building

1. From the repository root run:

```bash
npm run build-offline
```

This command first runs `npm run prebuild-offline` to install dependencies for each package and the GUI, then builds the React GUI and packages the VS Code extension into `extensions/vscode/build/continue-<version>.vsix`. Run this step while online so all dependencies can be downloaded; after that, it can be re-run offline.

## Installing

1. Open VS Code.
2. Run the command **Extensions: Install from VSIX...** and select the generated `.vsix` file.

## Configuration

Place your configuration file at `~/.continue/config.yaml` or `.continue/config.yaml` in your workspace. Only local assistants and third‑party model providers configured in YAML are supported.

## Removed Features

- Telemetry and all PostHog analytics
- Remote configuration sync
- Continue Hub imports
- Update checks and any network calls to `continue.dev`

This fork is intended for fully offline use. Hub packages referenced with `uses:` blocks are not supported.
