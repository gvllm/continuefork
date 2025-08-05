# Continue Offline Fork

This fork removes all network calls to `continue.dev` and PostHog so the VS Code extension can be built and used entirely offline.

## Building

Before running the build, you need to install dependencies for `core` and the packages under `packages/` and `gui`:

```bash
cd core && npm install
cd ../packages/config-types && npm install
cd ../config-yaml && npm install
cd ../fetch && npm install
cd ../openai-adapters && npm install
cd ../llm-info && npm install
cd ../../gui && npm install
cd ..  # return to repository root
```

Once the dependencies are installed, run:

```bash
npm run build-offline
```

This command installs root dependencies, builds the React GUI, and packages the VS Code extension into `extensions/vscode/build/continue-<version>.vsix`.

Using `npm install --prefix` on Windows is unsafe and should be avoided due to an npm bug.

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
