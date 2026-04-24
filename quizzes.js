/* ============================================================
   QUIZZES — 3 questions per level (W1)
   ============================================================ */
window.QUIZZES = {
  "1-1": [
    { q: "What is the Command Palette shortcut in VS Code?", options: ["Ctrl + P", "Ctrl + Shift + P", "Ctrl + K", "F1 only"], correct: 1, explain: "Ctrl+Shift+P (Cmd+Shift+P on Mac) opens the Command Palette — the cheat menu." },
    { q: "Which VS Code extension is your AI companion?", options: ["Prettier", "GitLens", "GitHub Copilot", "Live Server"], correct: 2, explain: "GitHub Copilot is your AI pair programmer inside VS Code." },
    { q: "What does the integrated Terminal represent in our metaphor?", options: ["Main menu", "Pause screen", "Debug/Cheat menu", "Save screen"], correct: 2, explain: "The integrated terminal is the debug/cheat menu — where you run commands." }
  ],
  "1-2": [
    { q: "Which command saves changes permanently to Git history?", options: ["git save", "git add", "git commit", "git push"], correct: 2, explain: "git commit writes the permanent snapshot. git add only stages." },
    { q: "What is a branch in Git?", options: ["A bug", "A parallel universe of your code", "A remote backup", "A deleted file"], correct: 1, explain: "A branch is an independent line of development." },
    { q: "Order the three Git states correctly:", options: ["Commit → Stage → Work", "Work → Stage → Commit", "Stage → Work → Commit", "Work → Commit → Stage"], correct: 1, explain: "Work on files → Stage with add → Commit to history." }
  ],
  "1-3": [
    { q: "What does `git push` do?", options: ["Deletes your code", "Sends local commits to remote", "Compresses files", "Logs you out"], correct: 1, explain: "push uploads your local commits to the remote." },
    { q: "A Pull Request is...", options: ["A way to delete branches", "A proposed change for team review", "An error message", "A deploy command"], correct: 1, explain: "PRs are how teams review, discuss, and merge changes." },
    { q: "`git clone <url>` does what?", options: ["Deletes a repo", "Duplicates a remote repo locally", "Creates a new branch", "Uploads code"], correct: 1, explain: "clone makes a full local copy of a remote repository." }
  ],
  "1-4": [
    { q: "Where do GitHub Actions workflows live?", options: [".github/workflows/*.yml", "/actions/", "package.json", "README.md"], correct: 0, explain: "Workflows are YAML files in .github/workflows/." },
    { q: "What triggers a workflow in GitHub Actions?", options: ["Only manual clicks", "Events like push, pull_request, schedule", "Only midnight", "Email"], correct: 1, explain: "Workflows trigger on events: push, PRs, schedules, manual dispatch, etc." },
    { q: "What is CI/CD?", options: ["Continuous Investment / Debt", "Continuous Integration / Delivery", "Code Inspection / Deletion", "Cloud Install / Deploy"], correct: 1, explain: "Continuous Integration + Continuous Delivery/Deployment." }
  ],
  "1-5": [
    { q: "Azure is best described as...", options: ["A game console", "A cloud platform", "An IDE", "A database only"], correct: 1, explain: "Azure is Microsoft's cloud computing platform." },
    { q: "A Resource Group in Azure is...", options: ["A team of people", "A logical container for related resources", "A billing plan only", "An error log"], correct: 1, explain: "Resource Groups organize related resources for lifecycle management." },
    { q: "What is Azure App Service?", options: ["A VM provisioning tool", "A managed platform to host web apps/APIs", "A storage bucket", "A DNS manager"], correct: 1, explain: "App Service is a PaaS offering for web apps and APIs." }
  ],
  "1-6": [
    { q: "Azure OpenAI Service gives you access to...", options: ["Only image APIs", "OpenAI models via Azure (GPT, embeddings)", "Just chatbots", "Only translation"], correct: 1, explain: "Azure OpenAI provides OpenAI models hosted on Azure with enterprise features." },
    { q: "What is RAG?", options: ["Random Agent Generator", "Retrieval-Augmented Generation", "Rapid API Gateway", "Redundant Array Group"], correct: 1, explain: "Retrieval-Augmented Generation — grounds LLMs on your data." },
    { q: "Azure AI Search is used for...", options: ["Search engine optimization", "Indexing + searching content for AI apps", "Logging", "Monitoring"], correct: 1, explain: "Azure AI Search powers search & RAG over your content." }
  ],
  "1-7": [
    { q: "GitHub Copilot in VS Code connects to...", options: ["Only your local files", "Azure OpenAI or GitHub's hosted models", "Only StackOverflow", "Your email"], correct: 1, explain: "Copilot uses LLMs hosted by GitHub/Azure to suggest code." },
    { q: "What does a webhook do?", options: ["Hooks fish", "Sends HTTP callbacks when events happen", "Deletes data", "Generates random numbers"], correct: 1, explain: "Webhooks POST to a URL when an event (like push) occurs." },
    { q: "Connecting GitHub Actions to Azure typically uses...", options: ["A shared password", "Federated credentials / service principal", "Raw SSH keys emailed", "Manual login every time"], correct: 1, explain: "OIDC federated credentials are the modern, secure approach." }
  ],
  "1-B": [
    { q: "The Boss of World 1 expects you to build what?", options: ["A physical console", "A full CI/CD pipeline that deploys to Azure with AI", "A brand-new OS", "A social network"], correct: 1, explain: "World 1 boss combines all lessons: code → commit → PR → Actions → Azure → AI." },
    { q: "Which file defines the GitHub Actions workflow?", options: ["README.md", ".github/workflows/deploy.yml", "package.json", "index.html"], correct: 1, explain: ".github/workflows/*.yml is where workflows live." },
    { q: "What should you do BEFORE pushing secrets to a public repo?", options: ["Nothing, it's fine", "Use GitHub Secrets / .env + .gitignore", "Email them to yourself", "Tweet them"], correct: 1, explain: "Never commit secrets. Use GitHub Secrets or env vars with .gitignore." }
  ],

  /* ========== WORLD 2 — Underground Caves ========== */
  "2-1": [
    { q: "Which is NOT a typical environment?", options: ["Development", "Staging", "Production", "Fantasy"], correct: 3, explain: "Dev, Staging and Production are the standard three; Fantasy is not a real environment." },
    { q: "Why use a Staging environment?", options: ["To replace Prod", "To test with prod-like data/config before release", "To run games", "For backups only"], correct: 1, explain: "Staging mirrors Production so you catch issues before your users do." },
    { q: "Environment variables typically live in...", options: ["Source code", "A .env file (gitignored) or secret store", "README.md", "package.json"], correct: 1, explain: "Use .env locally (gitignored) and secret stores like Key Vault or GitHub Secrets in CI/CD." }
  ],
  "2-2": [
    { q: "Which HTTP method is idempotent and used to fetch data?", options: ["POST", "GET", "DELETE", "PATCH"], correct: 1, explain: "GET retrieves resources and is idempotent (same request = same result, no side effects)." },
    { q: "A REST API typically returns data in...", options: ["HTML only", "JSON", "Binary Excel", "SMS"], correct: 1, explain: "JSON is the standard payload format for modern REST APIs." },
    { q: "HTTP status 404 means...", options: ["Server crashed", "Resource not found", "Success", "Unauthorized"], correct: 1, explain: "404 = the requested resource does not exist on the server." }
  ],
  "2-3": [
    { q: "What is Azure Key Vault for?", options: ["Storing public docs", "Managing secrets, keys, and certificates", "Running VMs", "Hosting websites"], correct: 1, explain: "Key Vault centralizes secrets, encryption keys, and TLS certs with access control." },
    { q: "HTTPS uses which protocol underneath?", options: ["FTP", "TLS/SSL", "SMTP", "IRC"], correct: 1, explain: "HTTPS = HTTP over TLS (the successor to SSL), encrypting traffic in transit." },
    { q: "You should rotate secrets...", options: ["Never", "On a schedule and on suspected leak", "Only when they expire naturally", "Once a decade"], correct: 1, explain: "Regular rotation + immediate rotation on leak is best practice." }
  ],
  "2-4": [
    { q: "DNS translates...", options: ["Code to binary", "Domain names to IP addresses", "IPs to MAC", "Bytes to bits"], correct: 1, explain: "DNS is the phonebook of the internet — names → IPs." },
    { q: "Which record maps a domain to an IPv4 address?", options: ["CNAME", "A record", "MX", "TXT"], correct: 1, explain: "The A record maps a hostname to an IPv4 address. AAAA is for IPv6." },
    { q: "A CNAME record is used to...", options: ["Send email", "Alias one domain name to another", "Verify ownership", "Block traffic"], correct: 1, explain: "CNAME = Canonical Name — an alias pointing to another hostname." }
  ],
  "2-5": [
    { q: "Scrum's time-boxed iteration is called...", options: ["Release", "Sprint", "Marathon", "Quest"], correct: 1, explain: "A Sprint is Scrum's fixed-length (typically 1-4 week) iteration." },
    { q: "Kanban emphasizes...", options: ["Fixed sprints", "Visualizing work and limiting WIP", "Big upfront design", "Waterfall phases"], correct: 1, explain: "Kanban uses a board to visualize flow and caps Work In Progress." },
    { q: "Agile values...", options: ["Processes over people", "Individuals and interactions over processes and tools", "Only docs", "Contracts over collaboration"], correct: 1, explain: "Per the Agile Manifesto — people and collaboration first." }
  ],
  "2-6": [
    { q: "DevOps is primarily about...", options: ["A tool you install", "Culture + practices uniting Dev and Ops", "Just Kubernetes", "One specific job title"], correct: 1, explain: "DevOps is a cultural + practice shift, supported by tooling and automation." },
    { q: "Infrastructure as Code tools include...", options: ["Word + Excel", "Terraform and Bicep", "PDF viewers", "None"], correct: 1, explain: "Terraform (HCL) and Bicep (Azure-native) are popular IaC tools." },
    { q: "Main benefit of IaC?", options: ["Slower deploys", "Repeatable, versioned infrastructure", "Needs more sysadmins", "Removes security"], correct: 1, explain: "Declarative infra in Git = reproducible, reviewable, versioned environments." }
  ],
  "2-7": [
    { q: "The three pillars of observability are...", options: ["CPU, RAM, Disk", "Logs, Metrics, Traces", "Dev, Staging, Prod", "Push, Pull, Merge"], correct: 1, explain: "Logs (events), Metrics (numbers over time), Traces (request paths) — the classic trio." },
    { q: "An alert should fire when...", options: ["Anything logs", "A signal crosses a threshold that needs action", "Every hour", "Never"], correct: 1, explain: "Alerts must be actionable — noisy alerts get ignored." },
    { q: "Azure Monitor integrates with...", options: ["Only VMs", "App Insights, Log Analytics, alerts, dashboards", "Only databases", "Nothing"], correct: 1, explain: "Azure Monitor is the umbrella for App Insights, Log Analytics, metrics and alerts." }
  ],
  "2-B": [
    { q: "For a production deploy you need...", options: ["No monitoring", "Secrets management + HTTPS + monitoring + env separation", "Only HTTPS", "Nothing"], correct: 1, explain: "Production requires secrets (Key Vault), TLS, observability, and environment isolation." },
    { q: "Best way to store connection strings?", options: ["In README", "Azure Key Vault / GitHub Secrets", "Hardcoded", "In a Slack message"], correct: 1, explain: "Never in code. Use a secret manager." },
    { q: "If an alert fires at 3am, it should...", options: ["Be ignorable", "Have a runbook & be actionable", "Just log", "Self-delete"], correct: 1, explain: "Actionable alerts have clear runbooks. Noisy alerts lead to alert fatigue." }
  ],

  /* ========== WORLD 3 — Sky World ========== */
  "3-1": [
    { q: "A skill tree helps you...", options: ["Guess randomly", "Plan your learning progression", "Replace mentors", "Skip fundamentals"], correct: 1, explain: "A progression map shows which skills unlock which — so you learn in the right order." },
    { q: "T-shaped developer means...", options: ["Wears t-shirts", "Broad knowledge + deep expertise in one area", "Only specialist", "Only generalist"], correct: 1, explain: "T-shape = broad horizontal + deep vertical expertise." },
    { q: "Best way to keep evolving?", options: ["Stop learning once hired", "Deliberate practice, OSS, side projects, reading", "Watch videos only", "Memorize syntax"], correct: 1, explain: "Continuous practice + real projects + community beats passive consumption." }
  ],
  "3-2": [
    { q: "`cd ..` does what?", options: ["Lists files", "Moves up one directory", "Deletes directory", "Copies files"], correct: 1, explain: "cd .. = change directory to parent." },
    { q: "Piping in shell is...", options: ["Plumbing", "`|` — sending stdout of one command as stdin of next", "Comments", "An error"], correct: 1, explain: "`cmd1 | cmd2` feeds cmd1's output as cmd2's input." },
    { q: "Which shell is native on Windows?", options: ["Bash only", "PowerShell", "zsh", "fish"], correct: 1, explain: "PowerShell ships with Windows; Bash is default on Linux/macOS." }
  ],
  "3-3": [
    { q: "A Docker container is...", options: ["A VM with its own OS", "A lightweight isolated process sharing the host kernel", "A database", "A code editor"], correct: 1, explain: "Containers share the host kernel but isolate filesystem, network, and processes." },
    { q: "Dockerfile defines...", options: ["Container runtime config", "Image build steps", "Network rules", "User accounts"], correct: 1, explain: "A Dockerfile is a script that builds a reproducible image layer by layer." },
    { q: "`docker compose up` is used to...", options: ["Build one container", "Start multi-container apps from docker-compose.yml", "Delete images", "Log out"], correct: 1, explain: "Compose orchestrates multiple related containers (app + db + cache, etc.)." }
  ],
  "3-4": [
    { q: "A unit test tests...", options: ["The whole app", "A single function/unit in isolation", "Only the UI", "Only the database"], correct: 1, explain: "Unit tests isolate one unit; mocks replace collaborators." },
    { q: "E2E test means...", options: ["Email to Email", "End-to-end user flow through the real system", "Easy to Execute", "Entry to Exit"], correct: 1, explain: "E2E tests exercise the full stack like a real user." },
    { q: "Test pyramid suggests...", options: ["Only E2E tests", "Many unit, fewer integration, fewer E2E", "Equal numbers", "No tests"], correct: 1, explain: "Lots of fast unit tests at the base, fewer expensive E2E at the top." }
  ],
  "3-5": [
    { q: "MIT license is...", options: ["Very restrictive", "Permissive — use freely with attribution", "Copyleft", "Closed source"], correct: 1, explain: "MIT is permissive: do almost anything as long as you include the copyright notice." },
    { q: "GPL is...", options: ["Permissive", "Copyleft — derivatives must also be GPL", "Proprietary", "Public domain"], correct: 1, explain: "GPL is viral copyleft — derivative works must share the same license." },
    { q: "First step to contribute to OSS?", options: ["Ship a huge PR", "Read CONTRIBUTING.md and find a good-first-issue", "Email the maintainer", "Fork and ignore"], correct: 1, explain: "Contributing guides and good-first-issues are designed for newcomers." }
  ],
  "3-6": [
    { q: "SQL databases use...", options: ["Documents only", "Tables, rows, columns, schemas", "Key-value only", "Graphs only"], correct: 1, explain: "Relational DBs organize data in tables with defined schemas." },
    { q: "NoSQL is best when...", options: ["You need rigid schemas", "You need flexible schemas / scale / specific access patterns", "You want transactions always", "You hate JSON"], correct: 1, explain: "NoSQL (document, key-value, graph, wide-column) fits specific access patterns." },
    { q: "CRUD stands for...", options: ["Create Read Update Delete", "Copy Rename Upload Deploy", "Cache Refresh Use Drop", "Commit Rebase Undo Diff"], correct: 0, explain: "The four basic data operations: Create, Read, Update, Delete." }
  ],
  "3-7": [
    { q: "Semantic versioning format?", options: ["YYYY.MM.DD", "MAJOR.MINOR.PATCH", "v1, v2, v3...", "Random"], correct: 1, explain: "SemVer: MAJOR = breaking, MINOR = feature, PATCH = fix." },
    { q: "A good README includes...", options: ["Nothing", "What, install, usage, license", "Only the name", "Only screenshots"], correct: 1, explain: "README should orient new users: what it is, how to install, how to use, license." },
    { q: "Branch protection on `main` helps...", options: ["Break the build", "Require reviews and checks before merge", "Allow direct pushes", "Hide history"], correct: 1, explain: "Protect main: require PR reviews, passing CI, and block force-push." }
  ],
  "3-8": [
    { q: "HTTP default port?", options: ["21", "80", "443", "22"], correct: 1, explain: "HTTP = 80, HTTPS = 443, FTP = 21, SSH = 22." },
    { q: "TCP is...", options: ["Connectionless", "Connection-oriented, reliable, ordered", "A UI framework", "A database"], correct: 1, explain: "TCP guarantees delivery and ordering (at the cost of overhead). UDP is fire-and-forget." },
    { q: "What does a router do?", options: ["Runs apps", "Forwards packets between networks", "Stores files", "Renders HTML"], correct: 1, explain: "Routers decide the path packets take between networks." }
  ],
  "3-9": [
    { q: "TypeScript is best described as...", options: ["A new runtime", "JavaScript with static types", "A database", "A compiler for C"], correct: 1, explain: "TS adds a static type system on top of JS; compiles to JS." },
    { q: "Python is often chosen for...", options: ["Low-level embedded", "Data science, scripting, AI/ML", "Game engines", "Firmware only"], correct: 1, explain: "Python shines in data, ML, scripting, web backends, and automation." },
    { q: "Rust's superpower is...", options: ["GC slowness", "Memory safety without a GC via ownership", "No tooling", "Dynamic typing"], correct: 1, explain: "Rust's borrow checker prevents data races at compile time — no GC needed." }
  ],
  "3-10": [
    { q: "React is a...", options: ["Backend database", "UI library for component-based UIs", "CSS framework", "Build tool"], correct: 1, explain: "React is a library for building UIs from reusable components." },
    { q: ".NET is...", options: ["A single language", "A multi-language platform (C#, F#, VB) for apps/services", "A browser", "A database only"], correct: 1, explain: ".NET is Microsoft's cross-platform runtime + framework." },
    { q: "Django and Spring are...", options: ["CSS libs", "Web frameworks (Python and Java)", "Editors", "Cloud services"], correct: 1, explain: "Django = Python web framework. Spring = Java/Kotlin framework." }
  ],
  "3-11": [
    { q: "npm is the package manager for...", options: ["Python", "Node.js/JavaScript", "Ruby", "Go"], correct: 1, explain: "npm ships with Node; pnpm/yarn are alternatives for the same ecosystem." },
    { q: "pip is for...", options: ["JS", "Python packages", "C#", "Rust"], correct: 1, explain: "pip installs packages from PyPI." },
    { q: "Lockfiles exist to...", options: ["Lock your account", "Pin exact transitive versions for reproducible installs", "Encrypt source", "Speed up editor"], correct: 1, explain: "package-lock.json / poetry.lock / Cargo.lock lock versions across machines." }
  ],
  "3-B": [
    { q: "Best single habit to level up your toolbox?", options: ["Only read docs", "Build small projects end-to-end", "Memorize syntax", "Avoid OSS"], correct: 1, explain: "Hands-on end-to-end projects cement real understanding." },
    { q: "Containerizing helps with...", options: ["Making builds randomly fail", "Consistent environments across dev → CI → prod", "Slower deploys", "Disabling testing"], correct: 1, explain: "Containers give consistent, reproducible environments." },
    { q: "A healthy dependency policy is...", options: ["Never update", "Keep deps current + audited, use lockfiles", "Use latest globally all the time", "Copy-paste libs"], correct: 1, explain: "Balance freshness (security) with stability (lockfiles + CI tests)." }
  ],

  /* ========== WORLD 4 — Water World ========== */
  "4-1": [
    { q: "JWT stands for...", options: ["JSON Web Token", "Java Web Transfer", "Just Wait Then", "Jumping Web Type"], correct: 0, explain: "JSON Web Token — a signed token carrying claims." },
    { q: "OAuth 2.0 primarily handles...", options: ["Encryption", "Delegated authorization", "Compression", "DNS"], correct: 1, explain: "OAuth = delegated authorization (who can do what on whose behalf)." },
    { q: "Where should tokens be stored in a browser?", options: ["localStorage always", "Httponly secure cookies preferred for sessions", "window.name", "URL"], correct: 1, explain: "httpOnly+Secure+SameSite cookies protect against XSS stealing tokens." }
  ],
  "4-2": [
    { q: "IaaS gives you...", options: ["Fully managed app", "Raw VMs + networking — you manage OS up", "Only a database", "Only functions"], correct: 1, explain: "IaaS = infrastructure; you manage OS, runtime, and app." },
    { q: "Serverless means...", options: ["No servers exist", "You don't manage the servers; pay per execution", "Offline apps", "Peer-to-peer"], correct: 1, explain: "Servers exist, but the platform manages them for you (Functions, Lambda)." },
    { q: "SaaS example?", options: ["Azure VM", "Office 365 / Gmail", "AKS", "Terraform"], correct: 1, explain: "SaaS = ready-to-use software (email, CRMs, Figma)." }
  ],
  "4-3": [
    { q: "Microservices are best when...", options: ["Team is 2 people starting out", "You need independent deploys and scaling per domain", "You want less complexity always", "You have no network"], correct: 1, explain: "Microservices trade simplicity for independence — worth it only at scale." },
    { q: "MVC splits...", options: ["Memory", "Model (data), View (UI), Controller (logic)", "Modules", "Moves"], correct: 1, explain: "Classic separation of concerns pattern." },
    { q: "Event-driven architecture uses...", options: ["Direct DB calls only", "Events on a broker to decouple producers/consumers", "Synchronous RPC only", "Shared memory"], correct: 1, explain: "Events + message broker decouple services — they react rather than call." }
  ],
  "4-4": [
    { q: "Blue-green deploy means...", options: ["Two parallel environments; switch traffic at release", "Paint your server", "Random routing", "Canary only"], correct: 0, explain: "Deploy to Green (idle) → switch traffic from Blue to Green; rollback = switch back." },
    { q: "Canary deploy sends...", options: ["All traffic to new version", "A small % to new version, monitor, then expand", "Zero traffic", "Random orders"], correct: 1, explain: "Canary = gradual rollout with monitoring for safe releases." },
    { q: "Feature flags let you...", options: ["Decorate code", "Turn features on/off at runtime without deploy", "Replace testing", "Skip CI"], correct: 1, explain: "Flags decouple deploy from release — ship dark, then flip on." }
  ],
  "4-5": [
    { q: "GitHub Flow emphasizes...", options: ["Many long-lived branches", "Short-lived feature branches → PR → main", "Only main", "No branches"], correct: 1, explain: "GitHub Flow: branch → commit → PR → merge → deploy." },
    { q: "Trunk-based development means...", options: ["Everyone works on main with small frequent merges", "Long feature branches forever", "Only one dev", "Manual merges"], correct: 1, explain: "Trunk-based: small, frequent merges to main, often behind feature flags." },
    { q: "`git rebase` vs `merge`?", options: ["Same thing", "Rebase rewrites commit history; merge preserves it", "Rebase = delete", "Merge rewrites"], correct: 1, explain: "Rebase replays commits linearly; merge creates a merge commit preserving branch history." }
  ],
  "4-6": [
    { q: "JSON stands for...", options: ["Java Syntax Object Name", "JavaScript Object Notation", "Just Some Object Names", "Junk Sent Over Network"], correct: 1, explain: "JSON = JavaScript Object Notation; language-agnostic data format." },
    { q: "Arrays are best for...", options: ["Keyed lookups", "Ordered lists with index access", "Random access by key", "File storage"], correct: 1, explain: "Arrays = ordered + index-accessed. Maps = key-accessed." },
    { q: "An object (dict/map) gives you...", options: ["Ordered positions", "O(1) average lookup by key", "File IO", "Networking"], correct: 1, explain: "Hash maps provide near-constant-time key lookups." }
  ],
  "4-7": [
    { q: "Caching helps because...", options: ["Disk is fast", "Memory is far faster than DB/network; reuse results", "It encrypts data", "It deletes data"], correct: 1, explain: "Caches serve hot data from memory, avoiding expensive re-computation or DB hits." },
    { q: "A CDN caches content...", options: ["In your basement", "At edge nodes close to users globally", "Only in one region", "Inside Git"], correct: 1, explain: "CDNs distribute static content globally for low-latency delivery." },
    { q: "Cache invalidation strategy?", options: ["Never expire", "TTL, event-based invalidation, or versioned keys", "Random delete", "Let users complain"], correct: 1, explain: "Use TTLs and/or explicit invalidation on writes; version keys for easy busts." }
  ],
  "4-8": [
    { q: "A message queue decouples...", options: ["Colors", "Producers and consumers with async messages", "Only hardware", "Frontend from CSS"], correct: 1, explain: "Queues buffer work so producers don't block on consumers." },
    { q: "Azure Service Bus offers...", options: ["Only FIFO", "Queues + topics + pub/sub + sessions", "Just logs", "File storage"], correct: 1, explain: "Service Bus is enterprise messaging with queues, topics, dead-letter, and sessions." },
    { q: "At-least-once delivery means...", options: ["Exactly once always", "Consumers must handle duplicates idempotently", "Never delivered", "Random"], correct: 1, explain: "Distributed systems often guarantee at-least-once — design consumers to be idempotent." }
  ],
  "4-B": [
    { q: "For a resilient production system, use...", options: ["One huge VM, no backups", "Redundancy, health checks, graceful failover, observability", "Just hope", "Only one region"], correct: 1, explain: "Plan for failure: redundancy + health + failover + monitoring." },
    { q: "To scale a web app, cache then...", options: ["Just buy bigger server forever", "Horizontal scale + async queues + DB read replicas", "Delete features", "Go offline"], correct: 1, explain: "Scale out, offload work to queues, and use read replicas before vertical scaling runs out." },
    { q: "Chaos engineering is...", options: ["Breaking prod randomly for fun", "Intentionally injecting faults to validate resilience", "Avoiding testing", "Anti-DevOps"], correct: 1, explain: "Controlled fault injection (Chaos Monkey style) builds confidence in systems." }
  ],

  /* ========== WORLD 5 — Bowser's Castle I ========== */
  "5-1": [
    { q: "Agentic DevOps differs from Traditional DevOps by...", options: ["Using no tools", "Adding AI agents that can plan + act autonomously", "Removing CI/CD", "Ignoring tests"], correct: 1, explain: "Agentic DevOps augments pipelines with AI agents that can reason and act." },
    { q: "The key new primitive in Agentic DevOps is...", options: ["The build server", "The agent", "The monitor", "The editor"], correct: 1, explain: "Agents (LLM + tools + memory + goals) are the new unit of automation." },
    { q: "Humans in Agentic DevOps become...", options: ["Obsolete", "Reviewers, orchestrators, and policy-setters", "Ticket-writers only", "Removed from the loop"], correct: 1, explain: "Humans move up the stack: setting goals, policies, and reviewing agent work." }
  ],
  "5-2": [
    { q: "How many AI maturity levels are defined?", options: ["3", "5", "7", "10"], correct: 1, explain: "The framework defines 5 levels from Apprentice to Legendary." },
    { q: "Apprentice level means...", options: ["Fully autonomous agents", "Basic AI assist (completions, chat)", "No AI", "Only ChatOps"], correct: 1, explain: "Apprentice = using AI for suggestions and simple help." },
    { q: "Legendary level is...", options: ["Still copy-pasting", "Coordinated autonomous agents across the SDLC", "One chatbot", "Only Copilot completions"], correct: 1, explain: "Legendary = multi-agent orchestration with guardrails across the full SDLC." }
  ],
  "5-3": [
    { q: "GitHub Copilot modes include...", options: ["Only completions", "Completions, Chat, Edits, Agent, Coding Agent", "Only PRs", "Nothing"], correct: 1, explain: "Copilot spans completions, chat, multi-file edits, agent mode, and the coding agent." },
    { q: "Copilot Coding Agent can...", options: ["Only suggest one line", "Work on GitHub issues autonomously and open PRs", "Only refactor tests", "Only comment"], correct: 1, explain: "Coding Agent picks up an issue, runs in a sandbox, and opens a PR." },
    { q: "Copilot @-mentions (like @workspace, @terminal) let you...", options: ["Email team", "Scope chat to a specific context", "Delete files", "Deploy code"], correct: 1, explain: "@-mentions route your question to the right Copilot participant." }
  ],
  "5-4": [
    { q: "An AI agent is made of...", options: ["Just an LLM", "LLM + Tools + Memory + Goals", "Only a database", "Only a prompt"], correct: 1, explain: "Agent = brain (LLM) + hands (tools) + notebook (memory) + mission (goals)." },
    { q: "The agent loop is...", options: ["Write once, run forever", "Observe → Plan → Act → Observe", "Only plan", "Only act"], correct: 1, explain: "Agents iterate through observation, planning, acting, and re-observing." },
    { q: "Tools give agents...", options: ["Personality", "The ability to affect the world (run code, call APIs)", "More tokens", "A GUI"], correct: 1, explain: "Without tools an agent can only talk. Tools make it act." }
  ],
  "5-5": [
    { q: "IDE agents live...", options: ["In the cloud only", "Inside your editor, pair-programming with you", "On mobile only", "In email"], correct: 1, explain: "IDE agents like Copilot in VS Code sit next to your code." },
    { q: "Background agents work...", options: ["Only while you watch", "Asynchronously on issues/PRs while you're away", "Only in CI once a year", "Not at all"], correct: 1, explain: "Background agents (e.g. Copilot Coding Agent) run async on tasks." },
    { q: "Productivity agents help with...", options: ["Only code generation", "Email, meetings, docs, cross-team work", "Only tests", "Only DNS"], correct: 1, explain: "Productivity agents (M365 Copilot etc.) tackle day-to-day knowledge work." }
  ],
  "5-6": [
    { q: "Guardrails in autonomous agents are...", options: ["Decoration", "Limits on tools, domains, budgets, and approval gates", "Only colors", "Optional"], correct: 1, explain: "Guardrails keep autonomy safe: what tools, which domains, spending caps, human approvals." },
    { q: "A planning loop lets an agent...", options: ["Only react", "Break a goal into steps and adapt", "Skip thinking", "Only call one tool"], correct: 1, explain: "Planning → Execute → Reflect → Replan cycle handles complex goals." },
    { q: "Autonomous doesn't mean...", options: ["With goals", "Unsupervised forever — humans still set policy", "Using tools", "Has memory"], correct: 1, explain: "Autonomy operates inside guardrails defined by humans." }
  ],
  "5-7": [
    { q: "MCP stands for...", options: ["Model Control Panel", "Model Context Protocol", "Multi-Cloud Provider", "Managed Container Platform"], correct: 1, explain: "Model Context Protocol — open standard for agent ↔ tool/context communication." },
    { q: "MCP's big benefit is...", options: ["Vendor lock-in", "Standard way for agents to access tools and data sources", "More passwords", "Slower agents"], correct: 1, explain: "MCP = universal 'USB-C' connector between agents and tools/context." },
    { q: "An MCP server exposes...", options: ["Web pages", "Tools, resources, and prompts to MCP clients", "SMTP", "Only RSS"], correct: 1, explain: "MCP servers advertise tools (functions), resources (data), and prompts." }
  ],
  "5-8": [
    { q: "The Three Horizons framework helps...", options: ["Plan photo shoots", "Balance today's ops, near-term AI, and transformative bets", "Only research", "Pick lunch"], correct: 1, explain: "H1 core, H2 emerging, H3 transformational — so you don't bet it all on one timeline." },
    { q: "Horizon 1 is...", options: ["Long-shot research", "Today's core business / DevOps", "Only fantasy", "Only experiments"], correct: 1, explain: "H1 = protect and grow what works today." },
    { q: "Horizon 3 is...", options: ["Yesterday", "Transformational bets 3-5 years out", "Only maintenance", "Only marketing"], correct: 1, explain: "H3 = speculative, high-reward future capabilities." }
  ],
  "5-9": [
    { q: "GHAS includes...", options: ["Only logging", "Code Scanning, Secret Scanning, Dependency Review", "Only monitoring", "Only chatbots"], correct: 1, explain: "GitHub Advanced Security = CodeQL scanning + secret scanning + dep review." },
    { q: "Secret scanning detects...", options: ["Bugs", "Committed credentials (API keys, tokens) in repos", "Typos", "Slow tests"], correct: 1, explain: "Secret scanning finds leaked secrets in history and PRs." },
    { q: "CodeQL is...", options: ["A build tool", "A semantic code analysis engine for finding vulnerabilities", "A DB", "A deploy tool"], correct: 1, explain: "CodeQL treats code as data you can query for security patterns." }
  ],
  "5-10": [
    { q: "SDD stands for...", options: ["Spec-Driven Development", "Software Defined Deployment", "Secure Deploy Doc", "Simple Dev Done"], correct: 0, explain: "Spec-Driven Development: write the spec, let the agent implement to it." },
    { q: "In SDD, the spec is...", options: ["Optional sketch", "The source of truth that drives code generation", "Only for PMs", "Only post-hoc"], correct: 1, explain: "Spec first → AI builds → validate against spec. Specs become executable." },
    { q: "Benefit of SDD?", options: ["More typing", "Clearer intent, better AI output, reviewable artifacts", "Fewer reviews", "Slower loop"], correct: 1, explain: "Explicit specs produce better AI output and are easier to review than raw code." }
  ],
  "5-B": [
    { q: "Biggest mindset shift with Agentic DevOps?", options: ["Everything is manual", "Humans set goals & review; agents execute within guardrails", "No humans needed", "No agents needed"], correct: 1, explain: "Move from doing every step to orchestrating agents that do the steps." },
    { q: "Essential guardrail types?", options: ["None", "Tool allow-lists, data boundaries, budget caps, approvals", "Only style linters", "Only tests"], correct: 1, explain: "Agentic safety = what they can use, where, how much, and when to ask." },
    { q: "Where should you start on the AI maturity journey?", options: ["Level 5 immediately", "Measure where you are, pick one painful workflow, pilot", "Ignore it", "Buy everything"], correct: 1, explain: "Start small with measurable wins; climb maturity levels deliberately." }
  ],

  /* ========== WORLD 6 — Bowser's Castle II ========== */
  "6-1": [
    { q: "Custom agents are defined in...", options: [".env", ".agent.md files", "package.json", "README"], correct: 1, explain: ".agent.md files declaratively define custom agents, their skills, and scope." },
    { q: "A custom agent helps by...", options: ["Being generic", "Specializing for a task (security reviewer, release bot)", "Replacing Git", "Only completing code"], correct: 1, explain: "Specialized agents give focused, high-quality outputs on narrow tasks." },
    { q: "Best scope for a custom agent?", options: ["Do everything", "Narrow, well-defined role with clear tools", "Only chat", "Only monitoring"], correct: 1, explain: "Narrow > broad: easier to evaluate and improve." }
  ],
  "6-2": [
    { q: "Agent Skills are defined in...", options: ["SKILL.md files", ".env", "dockerfile", "prompts only"], correct: 0, explain: "SKILL.md captures a reusable capability (how-to + tools + guardrails)." },
    { q: "Skills are composable meaning...", options: ["You must rewrite each time", "One agent can load many skills", "Only one per repo", "Can't be shared"], correct: 1, explain: "Agents compose skills like power-ups — collect and combine." },
    { q: "Skills should be...", options: ["Huge monoliths", "Focused, reusable, well-documented", "Undocumented", "Always private"], correct: 1, explain: "Small + focused + documented = reusable across teams and agents." }
  ],
  "6-3": [
    { q: "Custom Instructions apply...", options: ["Once", "Globally/permanently to Copilot in that scope", "Only for one message", "Only offline"], correct: 1, explain: "Custom Instructions are persistent rules Copilot always follows in that scope." },
    { q: "Good use of Custom Instructions?", options: ["Secrets", "Style conventions, language prefs, stack context", "Random jokes", "Long stories"], correct: 1, explain: "Tell Copilot your conventions once; it applies them everywhere." },
    { q: "Instructions live at...", options: ["Only org level", "Repo, org, or user level depending on scope", "Only user", "Only CI"], correct: 1, explain: "Scope them where they apply: user, repo, or org." }
  ],
  "6-4": [
    { q: "Prompt files use extension...", options: [".prompt.md", ".txt", ".yaml", ".env"], correct: 0, explain: ".prompt.md files are reusable prompts you can invoke like scripts." },
    { q: "Prompt files are good for...", options: ["Nothing repeatable", "Repeatable, parameterized workflows", "Secrets", "Auth tokens"], correct: 1, explain: "Codify common prompts (PR review, test-gen) as reusable files." },
    { q: "They are versioned where?", options: ["Nowhere", "In Git, like code", "Your head", "Slack"], correct: 1, explain: "Treat prompt files like code: version, review, test." }
  ],
  "6-5": [
    { q: "Hooks trigger on...", options: ["Nothing", "Events like file save, commit, PR, test run", "Only midnight", "Login only"], correct: 1, explain: "Hooks fire agents/actions on lifecycle events." },
    { q: "A good hook use case?", options: ["Delete prod", "Run security scan on commit", "Random tweet", "Shutdown laptop"], correct: 1, explain: "Automating quality/security checks on events is classic hook territory." },
    { q: "Hooks should be...", options: ["Heavy and slow", "Fast, idempotent, safe", "Undocumented", "Random"], correct: 1, explain: "Dev-time hooks must be fast to preserve flow; production hooks must be idempotent." }
  ],
  "6-6": [
    { q: "In practice, MCP lets you...", options: ["Encrypt disks", "Give agents a standard way to use tools (GitHub, DB, files)", "Replace Git", "Render images"], correct: 1, explain: "Production MCP: agent connects to an MCP server to use its tools." },
    { q: "Running MCP locally uses...", options: ["SMTP", "MCP clients (Claude Code, VS Code) + servers (stdio/HTTP)", "Only SSH", "Only email"], correct: 1, explain: "MCP runs over stdio or HTTP; clients speak to servers." },
    { q: "Best practice with MCP servers?", options: ["Grant all access", "Principle of least privilege per server", "Never use them", "Run only one"], correct: 1, explain: "Least privilege: expose only the tools/resources the agent actually needs." }
  ],
  "6-7": [
    { q: "Lean Agent + Rich Skill pattern means...", options: ["Huge agents, tiny skills", "Small agent orchestrator + powerful, detailed skills", "No agents", "No skills"], correct: 1, explain: "Keep the agent thin (routing) and push complexity into reusable skills." },
    { q: "Multi-agent orchestration is useful when...", options: ["Single task", "Tasks benefit from specialist handoffs", "You hate AI", "No tools exist"], correct: 1, explain: "Divide and conquer: planner → coder → reviewer → releaser." },
    { q: "Biggest risk of naive multi-agent?", options: ["Too cheap", "Runaway loops and ballooning token cost", "Too slow only", "Too silent"], correct: 1, explain: "Loops + chatter = cost. Guardrails and budgets are essential." }
  ],
  "6-8": [
    { q: "To reduce tokens, you should...", options: ["Send whole repo always", "Use concise prompts, retrieval, and targeted context", "Copy-paste entire docs", "Send images only"], correct: 1, explain: "Send only what's relevant; use retrieval/summaries; chunk long context." },
    { q: "Context window is...", options: ["Your monitor", "The max tokens an LLM can process per call", "A browser", "A Kafka topic"], correct: 1, explain: "Hard limit — architect around it with retrieval and summaries." },
    { q: "Caching prompts / prefixes helps because...", options: ["It doesn't", "Repeated prefixes can be served from provider cache at lower cost/latency", "Disables tools", "Randomizes output"], correct: 1, explain: "Many providers offer prompt caching for stable prefixes — huge cost win." }
  ],
  "6-B": [
    { q: "Quick-reference rule #1 for Copilot customization?", options: ["Skip docs", "Instructions for rules, Prompts for tasks, Skills for capabilities", "Use only chat", "Never commit"], correct: 1, explain: "Three knobs: permanent rules (instructions), repeatable tasks (prompts), composable capabilities (skills)." },
    { q: "Biggest lever to improve agent output?", options: ["More tokens", "Better specs, cleaner context, narrower tools", "Fancy UI", "More models"], correct: 1, explain: "Clear intent + clean context + right tools beats raw model size every time." },
    { q: "To trust an agent, you need...", options: ["Blind faith", "Evaluations, logging, approval gates, and rollbacks", "Bigger model", "No tests"], correct: 1, explain: "Trust = evaluate, observe, gate, and reverse when wrong." }
  ],

  /* ========== WORLD 7 — Star World ========== */
  "7-1": [
    { q: "Azure AI Foundry is a place to...", options: ["Mine crypto", "Discover, evaluate, deploy, and manage AI models", "Send email", "Run Kubernetes only"], correct: 1, explain: "AI Foundry is Microsoft's unified platform for the full AI app lifecycle." },
    { q: "Model Catalog contains...", options: ["Only OpenAI", "Hundreds of foundation + task models from many providers", "Only images", "Just docs"], correct: 1, explain: "Catalog spans OpenAI, Meta, Mistral, Hugging Face, Microsoft, and more." },
    { q: "Prompt Flow is for...", options: ["Writing novels", "Building, evaluating, and deploying LLM workflows", "DNS config", "Cache tuning"], correct: 1, explain: "Prompt Flow = visual authoring + evaluation for prompt/LLM pipelines." }
  ],
  "7-2": [
    { q: "RAG stands for...", options: ["Rapid Agent Gateway", "Retrieval-Augmented Generation", "Random Access Generation", "Real Agent Graph"], correct: 1, explain: "Retrieve relevant docs → augment prompt → generate grounded answer." },
    { q: "Embeddings are...", options: ["Pictures", "Vectors representing semantic meaning of text", "Passwords", "Random bytes"], correct: 1, explain: "Embeddings map text into high-dim vectors; similar meaning → close vectors." },
    { q: "A vector DB stores...", options: ["Only SQL rows", "Embeddings with ANN search for semantic retrieval", "Only images", "Only videos"], correct: 1, explain: "Vector DBs (Azure AI Search, Pinecone, pgvector) enable fast similarity search." }
  ],
  "7-3": [
    { q: "LangChain provides...", options: ["Only prompts", "Chains, agents, tools, memory abstractions", "Only embeddings", "Only a UI"], correct: 1, explain: "LangChain is a framework for composing LLM apps — chains, agents, tools, memory." },
    { q: "LCEL is...", options: ["A database", "LangChain Expression Language — composable runnables", "A CSS framework", "A shell"], correct: 1, explain: "LCEL composes LangChain components with a pipe-like operator." },
    { q: "Agents in LangChain...", options: ["Only answer statically", "Decide which tool to call next to reach a goal", "Don't use tools", "Replace LLMs"], correct: 1, explain: "Agents use the LLM as a reasoner choosing tools iteratively." }
  ],
  "7-4": [
    { q: "Semantic Kernel is...", options: ["A Linux kernel", "Microsoft's SDK for AI orchestration with plugins and planners", "A shell", "A GPU lib"], correct: 1, explain: "SK gives you kernels, plugins, planners, and memory across .NET / Python / Java." },
    { q: "AutoGen focuses on...", options: ["Solo agents", "Multi-agent conversations and orchestration", "Database only", "Only images"], correct: 1, explain: "AutoGen = framework for conversable, collaborating agents." },
    { q: "Microsoft Agent Framework brings...", options: ["A unified model for building agents on Azure", "Just Copilot UI", "Only SK", "Only AutoGen"], correct: 0, explain: "The framework unifies SK, AutoGen, and the AI Agents SDK into one story." }
  ],
  "7-5": [
    { q: "The 4 agent channels are...", options: ["IDE, Chat, ChatOps, Background", "Email, SMS, Slack, Push", "CPU, GPU, RAM, Disk", "Git, Docker, K8s, CI"], correct: 0, explain: "IDE (inline), Chat (conversational), ChatOps (Slack/Teams commands), Background (async jobs)." },
    { q: "ChatOps agents live in...", options: ["Your kernel", "Slack/Teams — run ops via chat commands", "Only CI", "Only monitoring"], correct: 1, explain: "ChatOps = operate your systems through chat with agent commands." },
    { q: "Background agents excel at...", options: ["Nothing", "Long-running, async tasks (triage, bulk refactors)", "Only completions", "Only UI"], correct: 1, explain: "Background = async workers that report back when done." }
  ],
  "7-6": [
    { q: "IDP stands for...", options: ["Internal Dev Platform", "Intrusion Detect Probe", "Infra Data Plane", "Internet Domain Provider"], correct: 0, explain: "Internal Developer Platform — curated self-service layer for dev teams." },
    { q: "Backstage was created by...", options: ["Google", "Spotify", "Apple", "Netflix"], correct: 1, explain: "Spotify open-sourced Backstage; it's a CNCF project now." },
    { q: "A Software Catalog centralizes...", options: ["Memes", "Services, APIs, docs, ownership", "Secrets", "Monitoring dashboards only"], correct: 1, explain: "Catalog = single source of truth for what exists and who owns it." }
  ],
  "7-B": [
    { q: "For a first RAG agent you need at minimum...", options: ["Only an LLM", "Embedder + vector store + retriever + LLM + grounding prompt", "Only a prompt", "Kubernetes"], correct: 1, explain: "Minimum RAG stack: embed → store → retrieve → prompt with context → LLM." },
    { q: "To evaluate your agent, measure...", options: ["Vibes", "Groundedness, relevance, safety, latency, cost", "Only tokens", "Only speed"], correct: 1, explain: "Production agents need quality + safety + performance + cost metrics." },
    { q: "Biggest RAG failure mode?", options: ["Too accurate", "Poor retrieval → hallucinations", "Too many docs", "Docs exist"], correct: 1, explain: "If retrieval misses, the LLM fills the gap — often incorrectly. Tune retrieval." }
  ],

  /* ========== WORLD 8 — Final Castle ========== */
  "8-1": [
    { q: "The complete Agentic DevOps flow connects...", options: ["Only Git", "Editor → repo → CI/CD → cloud → observability → agents across all layers", "Only tests", "Only AI chat"], correct: 1, explain: "Agents operate across the entire SDLC, not just one step." },
    { q: "Where do agents plug in?", options: ["Only at build", "Code, review, deploy, ops, incident, support — everywhere", "Only at deploy", "Only at plan"], correct: 1, explain: "From ideation to production operations — agents help at every stage." },
    { q: "The human's main job becomes...", options: ["Copy-paste", "Setting goals, policies, and reviewing outcomes", "Disappearing", "Writing every line"], correct: 1, explain: "Humans move up: goals, guardrails, review, strategy." }
  ],
  "8-2": [
    { q: "Which skill ties it all together?", options: ["Memorizing commands", "Systems thinking + clear specs + good guardrails", "Only speed typing", "Only chat"], correct: 1, explain: "Understanding how the pieces connect and communicating intent clearly." },
    { q: "Agentic system 'prod incident' playbook should...", options: ["Give agents full access", "Have a human-approval gate and rollback plan", "Skip logs", "Ignore SLOs"], correct: 1, explain: "Higher-risk actions = stricter gates. Always preserve rollback." },
    { q: "Most important metric to track across all 8 worlds?", options: ["LOC", "Value delivered to users with safety & quality", "Keystrokes", "Coffee"], correct: 1, explain: "Outcomes > outputs. Agentic DevOps must still deliver real, safe value." }
  ],
  "8-3": [
    { q: "Best next step after finishing?", options: ["Forget it all", "Build something real and share it", "Only theory", "Only videos"], correct: 1, explain: "Ship a small real project — that's where knowledge cements." },
    { q: "To stay current, you should...", options: ["Stop reading", "Follow communities, docs, and build regularly", "Only tweet", "Ignore updates"], correct: 1, explain: "Field moves fast — community + hands-on practice > passive learning." },
    { q: "Certifications are most valuable when...", options: ["Replaced by vibes", "Paired with real projects and teamwork", "Memorized blindly", "Bought"], correct: 1, explain: "Certs + portfolio + teamwork = full picture for hiring." }
  ],
  "8-F": [
    { q: "Which of these is NOT in the glossary?", options: ["MCP", "RAG", "Warp Pipe", "SuperBlockchainXYZ"], correct: 3, explain: "The glossary covers real terms; made-up ones don't belong." },
    { q: "The deepest lesson from 8 worlds?", options: ["Tools matter most", "Principles > tools; keep learning, keep shipping", "Everything changes nothing", "AI replaces all thinking"], correct: 1, explain: "Tools change. Principles — clarity, safety, iteration — endure." },
    { q: "Your final power-up?", options: ["Infinite coins", "The ability to teach someone else this material", "No bugs ever", "Skipping review"], correct: 1, explain: "Teaching cements mastery. Pass the Star forward." }
  ]
};
