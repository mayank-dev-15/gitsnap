# gitsnap

[![Live Demo](https://img.shields.io/badge/🚀_Live_Demo-Visit-blue?style=for-the-badge)](https://mayank-dev-15.github.io/gitsnap-demo)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
![Language](https://img.shields.io/badge/Language-JavaScript-green)

Instant git snapshot and rollback tool — zero dependencies, single Node.js file.

`git` `snapshot` `rollback` `cli`

---

## ✨ Features

- Instant git snapshots with a single command
- Quick rollback to any previous snapshot
- Single file, zero dependencies
- List all snapshots with timestamps
- Delete old snapshots
- Works with any git repository

---

## 🚀 Live Demo

**[View Demo →](https://mayank-dev-15.github.io/gitsnap-demo)**

The demo is hosted on GitHub Pages. No installation needed — just click and explore.

---

## 🛠️ Tech Stack

- Node.js
- child_process
- fs

---

## 📦 Installation

```bash
git clone https://github.com/mayank-dev-15/gitsnap.git
cd gitsnap
```

```bash
cd gitsnap
# No install needed — single file
node gitsnap.js
```

---

## 💡 Usage

```bash
# Create a snapshot
node gitsnap.js save "Before refactoring"

# List snapshots
node gitsnap.js list

# Rollback to a snapshot
node gitsnap.js rollback <id>

# Delete a snapshot
node gitsnap.js delete <id>
```

---

## 📁 Project Structure

```
gitsnap/
├── README.md          # This file
├── Demo.md            # Demo documentation
├── LICENSE            # MIT License
└── ...                # Source files
```

---

## 🤝 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

---

## 📄 License

This project is licensed under the MIT License.

---

## 🔗 Links

- **Live Demo:** [https://mayank-dev-15.github.io/gitsnap-demo](https://mayank-dev-15.github.io/gitsnap-demo)
- **Source Code:** [github.com/mayank-dev-15/gitsnap](https://github.com/mayank-dev-15/gitsnap)
- **Issues:** [github.com/mayank-dev-15/gitsnap/issues](https://github.com/mayank-dev-15/gitsnap/issues)
- **Releases:** [github.com/mayank-dev-15/gitsnap/releases](https://github.com/mayank-dev-15/gitsnap/releases)
- **Demo Docs:** [Demo.md](https://github.com/mayank-dev-15/gitsnap/blob/main/Demo.md)

---

*Built with ❤️ by [Mayank Basena](https://github.com/mayank-dev-15) · 15 · GSoC 2027 Aspirant*

---

## ⚠️ Attribution & Credit Notice

This project is created and maintained by **Mayank Basena** ([@mayank-dev-15](https://github.com/mayank-dev-15)).

If you fork, use, modify, or derive work from this repository, **you must give proper credit** to the original author. This includes:

- Keeping this attribution section intact in any fork or derivative work
- Crediting **Mayank Basena** in your project's README or documentation
- Linking back to the original repository

**Failure to provide proper credit is a violation of the spirit of open source and may result in a DMCA takedown request.**

> *"No AI. No Shortcuts."* — Mayank Basena
