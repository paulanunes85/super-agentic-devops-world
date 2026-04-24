/* ============================================================
   CHALLENGES — Code playground, drag-drop, fill-the-gap
   Interactive exercises for hands-on learning
   ============================================================ */

window.CHALLENGES = {};
window.DRAG_CHALLENGES = {};
window.FILL_GAPS = {};

/* ============ CODE PLAYGROUND CHALLENGES ============ */

CHALLENGES["1-1"] = [
  {
    prompt: "Open the Command Palette in VS Code. Type the shortcut:",
    expected: /ctrl\s*\+\s*shift\s*\+\s*p/i,
    hint: "It's the 'cheat menu' shortcut — three keys with Ctrl, Shift, and a letter.",
    coins: 5
  },
  {
    prompt: "Open the integrated terminal in VS Code. Type the shortcut:",
    expected: /ctrl\s*\+\s*`/i,
    hint: "Ctrl plus the backtick key (`) opens the debug/cheat menu.",
    coins: 5
  }
];

CHALLENGES["1-2"] = [
  {
    prompt: "Initialize a new Git repository:",
    expected: /git\s+init/i,
    hint: "Two words: git + the command to start something new.",
    coins: 5
  },
  {
    prompt: "Stage all files for commit:",
    expected: /git\s+add\s+(\.|--all|-A)/i,
    hint: "git add followed by a dot or --all to stage everything.",
    coins: 5
  },
  {
    prompt: "Commit with the message 'first save':",
    expected: /git\s+commit\s+-m\s+["'].*["']/i,
    hint: "git commit -m followed by your message in quotes.",
    coins: 5
  }
];

CHALLENGES["1-3"] = [
  {
    prompt: "Push your code to origin for the first time on the main branch:",
    expected: /git\s+push\s+-u\s+origin\s+(main|master)/i,
    hint: "git push -u origin <branch> sets the upstream tracking.",
    coins: 5
  },
  {
    prompt: "Pull the latest changes from the remote:",
    expected: /git\s+pull/i,
    hint: "The opposite of push — two words to download updates.",
    coins: 5
  }
];

CHALLENGES["1-4"] = [
  {
    prompt: "Where do GitHub Actions workflow files live? Type the path:",
    expected: /\.github\/workflows/i,
    hint: "A hidden folder (.github) with a subfolder for automation.",
    coins: 5
  }
];

CHALLENGES["2-3"] = [
  {
    prompt: "Store a secret called 'db-pass' with value 'S3cure!' in Azure Key Vault named 'myvault':",
    expected: /az\s+keyvault\s+secret\s+set/i,
    hint: "az keyvault secret set — the Azure CLI command to store secrets.",
    coins: 5
  }
];

CHALLENGES["2-6"] = [
  {
    prompt: "Initialize a Terraform working directory:",
    expected: /terraform\s+init/i,
    hint: "terraform + the command that downloads providers and sets up the backend.",
    coins: 5
  }
];

CHALLENGES["3-3"] = [
  {
    prompt: "Build a Docker image and tag it 'myapp':",
    expected: /docker\s+build\s+-t\s+myapp/i,
    hint: "docker build -t <name> to build and tag an image.",
    coins: 5
  },
  {
    prompt: "Start all services defined in docker-compose.yml:",
    expected: /docker\s+compose\s+up/i,
    hint: "docker compose up — two words after docker to launch multi-container apps.",
    coins: 5
  }
];

/* ============ DRAG-AND-DROP SEQUENCE CHALLENGES ============ */

DRAG_CHALLENGES["1-2"] = {
  prompt: "Put the three Git states in the correct order:",
  items: ["Staging Area", "Repository (Committed)", "Working Directory"],
  correctOrder: ["Working Directory", "Staging Area", "Repository (Committed)"],
  coins: 10
};

DRAG_CHALLENGES["1-4"] = {
  prompt: "Order the CI/CD pipeline stages:",
  items: ["Deploy", "Build", "Test"],
  correctOrder: ["Build", "Test", "Deploy"],
  coins: 10
};

DRAG_CHALLENGES["2-1"] = {
  prompt: "Order the environments from least critical to most critical:",
  items: ["Production", "Dev", "Staging"],
  correctOrder: ["Dev", "Staging", "Production"],
  coins: 10
};

DRAG_CHALLENGES["5-4"] = {
  prompt: "Order the Agent Loop steps:",
  items: ["Act", "Observe", "Plan"],
  correctOrder: ["Observe", "Plan", "Act"],
  coins: 10
};

/* ============ FILL-THE-GAP CHALLENGES ============ */

FILL_GAPS["1-2"] = [
  {
    code: "git _____ -b feature",
    answer: "checkout",
    hint: "The command to switch branches — also creates one with -b."
  },
  {
    code: "git _____ README.md",
    answer: "add",
    hint: "Move a file from working directory to the staging area."
  },
  {
    code: "git _____ -m \"save progress\"",
    answer: "commit",
    hint: "Write a permanent snapshot to your Git history."
  }
];

FILL_GAPS["3-3"] = [
  {
    code: "docker _____ -t myapp .",
    answer: "build",
    hint: "Create an image from a Dockerfile."
  },
  {
    code: "docker _____ up -d",
    answer: "compose",
    hint: "Orchestrate multi-container applications."
  }
];

FILL_GAPS["1-4"] = [
  {
    code: "on:\n  _____:\n    branches: [main]",
    answer: "push",
    hint: "The Git event that triggers when code is sent to the remote."
  }
];
