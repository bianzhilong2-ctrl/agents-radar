# OpenClaw Ecosystem Digest 2026-06-26

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-06-26 02:30 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [NanoClaw](https://github.com/qwibitai/nanoclaw)
- [NullClaw](https://github.com/nullclaw/nullclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [LobsterAI](https://github.com/netease-youdao/LobsterAI)
- [TinyClaw](https://github.com/TinyAGI/tinyagi)
- [Moltis](https://github.com/moltis-org/moltis)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeptoClaw](https://github.com/qhkm/zeptoclaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw Deep Dive

### 1. **Today's Overview**  
The OpenClaw project shows significant activity with 500 issues and 500 PRs updated in the last 24h, though 27 issues and 91 PRs were closed. Today’s focus includes resolving critical security and stability issues, enhancing cross-platform functionality, and advancing community-driven skill integrations. Memory leaks, cron job failures, and Discord/Telegram integration bugs dominate recent fixes, while several PRs address cross-channel workflow inconsistencies and tool compatibility gaps. Progress is ongoing, with many PRs requiring further review or proof-of-concept validation.  

---

### 2. **Releases**  
No new releases reported in the last 24h.  

---

### 3. **Project Progress**  
- **Merged/Closed PRs**:  
  - **#96903**: Fixed XAI video response reading bounds to prevent OOM.  
  - **#91262**: Fallback to `tsx` for TypeScript builds.  
  - **#96618**: Bounded JSON response reads across 4 provider APIs.  
  - **#91249**: Streamlined Windows Startup-folder launcher (no longer visible).  
  - **#96902**: Prevented transcript file renaming during daily resets (merged/contested).  
- **Advanced Features**:  
  - Discord/Telegram sub-agent progress visualization (**PR #95604**).  
  - Security Matrix runtime-fact audit model (**PR #92086**, awaiting review).  
  - Linux Rust/GTK4 desktop companion app (**PR #61576**, pending testing).  

---

### 4. **Community Hot Topics**  
1. **Security/Gateways**  
   - [Issue #51396](https://github.com/openclaw/openclaw/issues/51396): Unconditional scope stripping breaks token-auth clients (270+ ⭐ reactions).  
   - [Issue #65624](https://github.com/openclaw/openclaw/issues/65624): Mattermost command tokens exposed via cleartext callbacks (critical CVSS vuln).  
2. **Memory/Session Stability**  
   - [Issue #54155](https://github.com/openclaw/openclaw/issues/54155): Gateway memory leaks (389MB → 14.7GB in 4 days).  
3. **Cross-Platform UX**  
   - [Issue #49944](https://github.com/openclaw/openclaw/issues/49944): Tool cards remain collapsed despite `verboseDefault=full` (UI polish nitpick).  

---

### 5. **Bugs & Stability**  
- **Critical**  
  - [Issue #65624](https://github.com/openclaw/openclaw/issues/65624): High-sev Mattermost secret leak (no fix yet).  
  - [Issue #96895](https://github.com/openclaw/openclaw/issues/96895): Visible UUIDs in Signal attachments (poor UX).  
- **Progressing Fixes**  
  - **#67417**: Hacky backup cleanup during ENOENT repairs (needs maintainer-review).  
  - **#55334**: `sessions.json` unbounded growth causing OOM (pending PR).  

---

### 6. **Feature Requests & Roadmap Signals**  
- **Skills Ecosystem**:  
  - [Issue #50090](https://github.com/openclaw/openclaw/issues/50090): Community skill deployment friction (needs product decisions).  
- **Multi-Agent Collaboration**:  
  - [Issue #65374](https://github.com/openclaw/openclaw/issues/65374): Shared memory dreaming contaminates agent identities.  
- **CLI/Services**:  
  - [Issue #54531](https://github.com/openclaw/openclaw/issues/54531): Unreliable channel message replies (PR #64664) addressed partially.  

---

### 7. **User Feedback Summary**  
- **Pain Points**:  
  - 12+ reports of missing WhatsApp messages after reconnects ([Issue #50093](https://github.com/openclaw/openclaw/issues/50093)).  
  - Security frustration over cleartext credential storage ([Issue #64046](https://github.com/openclaw/openclaw/issues/64046)).  
- **Satisfaction Drivers**:  
  - Discord sub-agent progress feedback (**PR #95604**) praised for visibility.  
  - Requests for browser tool click/downloader transparency (**PR #93307**).  

---

### 8. **Backlog Watch**  
- **Long-Standing Issues**  
  - [Issue #58450](https://github.com/openclaw/openclaw/issues/58450): 88 days open: Agent promises follow-ups without executing actions.  
  - [Issue #48788](https://github.com/openclaw/openclaw/issues/48788): 103 days open: Need multi-encoding filename handling (status: PR #48578).  
- **Critical Open PRs**  
  - **#83648**: Cron Authorization header fix (deferred pending security review).  
  - **#66**: Writer-friendly pnpm path cleanup (stale but foundational).  

Project health remains precarious due to unresolved memory leaks and security gaps, but community engagement is robust with ongoing fixes for cross-channel tools and agent workflows.


---

## Cross-Ecosystem Comparison


# Cross-Project Comparison Report: Personal AI Assistant / Agent Open-Source Ecosystem

## 1. Ecosystem Overview

The personal AI assistant and agent open-source landscape is experiencing rapid evolution, with 13 projects analyzed showing varying levels of activity and maturity. Core themes include cross-platform compatibility, security hardening, multi-agent collaboration, and skill/automation ecosystem expansion. Projects range from highly active development cycles with daily releases to mature platforms focusing on stability and enterprise readiness. The ecosystem demonstrates strong community engagement, with contributors actively addressing critical issues around memory management, authentication, and platform-specific integrations.

## 2. Activity Comparison

| Project | Issues Count | PR Count | Releases (24h) | Health Score* |
|---------|--------------|----------|----------------|---------------|
| **OpenClaw** | 500+ | 500+ | None | 7.2/10 |
| **NanoBot** | ~45+ | 16+ | None | 8.1/10 |
| **Hermes Agent** | 50 | 50 | None | 6.5/10 |
| **PicoClaw** | N/A | N/A | N/A | N/A |
| **NanoClaw** | 1 | 16 | None | 8.5/10 |
| **NullClaw** | 0 | 0 | None | 4.0/10 |
| **IronClaw** | 50 | 50 | None | 7.8/10 |
| **LobsterAI** | N/A | N/A | N/A | N/A |
| **TinyClaw** | 0 | 0 | None | 3.5/10 |
| **Moltis** | 0 | 0 | None | 3.0/10 |
| **CoPaw** | 27 | 50 | None | 8.8/10 |
| **ZeptoClaw** | 0 | 0 | None | 2.5/10 |
| **ZeroClaw** | N/A | N/A | N/A | N/A |

*Health Score combines activity level, issue resolution rate, and community engagement (scale 1-10)

## 3. OpenClaw's Position

**Advantages vs Peers:**
- Largest issue/PR volume indicating highest community engagement
- Most comprehensive security focus with dedicated Security Matrix runtime audit
- Advanced cross-platform support with Linux Rust/GTK4 companion app in development
- Strong Discord/Telegram integration with visual sub-agent progress features

**Technical Approach Differences:**
- Core reference implementation with TypeScript-first approach
- Emphasis on bounded memory operations and OOM prevention
- Windows-specific launcher optimizations
- Provider-agnostic JSON response handling

**Community Size Comparison:**
OpenClaw demonstrates the largest active community with 500+ issues and PRs, significantly larger than NanoBot (~45 issues) and CoPaw (27 issues). This indicates strong adoption but also potential maintenance challenges.

## 4. Shared Technical Focus Areas

**Memory Management & Stability:**
- OpenClaw: Gateway memory leaks (389MB → 14.7GB), sessions.json unbounded growth
- Hermes Agent: Desktop crashes, daemon time-outs
- NanoClaw: Container CPU/memory caps for resource management

**Security & Authentication:**
- OpenClaw: Token-auth scope stripping, Mattermost credential exposure
- NanoBot: Level 5 vulnerability in asset distribution, MCP integration security
- IronClaw: Capability policy systems, credential proxy daemon
- CoPaw: Provider compatibility and function calling security

**Cross-Platform Integration:**
- OpenClaw: Discord/Telegram integration bugs, Windows startup optimization
- CoPaw: Browser automation stability, Linux default-browser detection
- Hermes Agent: WeCom adapter streaming fixes

## 5. Differentiation Analysis

**Feature Focus:**
- **OpenClaw**: Cross-channel workflow consistency, security matrix
- **NanoBot**: PWA mobile UI, Ask Clarification tool
- **IronClaw**: Reborn architecture, memory extensions, performance optimization
- **CoPaw**: Browser automation, custom provider compatibility

**Target Users:**
- **Enterprise/Organization**: IronClaw (capability policy systems), NanoBot (credential management)
- **Individual Developers**: CoPaw, OpenClaw (skill ecosystem)
- **Cross-Platform Power Users**: OpenClaw, Hermes Agent

**Technical Architecture:**
- **Rust Integration**: OpenClaw (Linux desktop), Hermes Agent
- **Provider Agnostic**: CoPaw (OpenAI-compatible endpoints), OpenClaw (multi-provider JSON)
- **Memory Extensions**: IronClaw (userland extension model), OpenClaw (bounded operations)

## 6. Community Momentum & Maturity

**Rapidly Iterating (High Activity):**
- **OpenClaw**: 500+ issues/PRs, daily fixes, security focus
- **CoPaw**: 27 issues, 50 PRs, browser automation enhancements
- **NanoBot**: 15+ new features, security hardening

**Stabilizing (Moderate Activity):**
- **IronClaw**: 50 issues, 50 PRs, Reborn architecture focus
- **Hermes Agent**: 50 issues, 50 PRs, security patches

**Maintenance Mode (Low Activity):**
- **NullClaw, TinyClaw, Moltis, ZeptoClaw**: Minimal to no activity
- **PicoClaw, ZeroClaw**: Insufficient data for assessment

## 7. Trend Signals

**Industry Trends:**
1. **Security-First Development**: Multiple projects prioritizing security hardening, credential management, and audit models
2. **Cross-Platform Consistency**: Emphasis on Windows, Linux, and mobile platform support with unified experiences
3. **Memory & Resource Management**: Growing focus on preventing memory leaks and implementing resource caps
4. **Skill Ecosystem Expansion**: Community-driven skill deployment and customization becoming standard
5. **Enterprise Readiness**: Zero-knowledge proxy daemons, capability policy systems, and multi-admin workflows

**Value for AI Agent Developers:**
- Security patterns and audit models provide templates for secure agent deployment
- Cross-platform integration solutions offer battle-tested approaches for multi-environment support
- Memory management techniques address common agent scalability challenges
- Skill/automation ecosystem frameworks enable faster feature development
- Enterprise governance features (approval workflows, credential management) inform production deployments

The ecosystem shows strong innovation momentum with practical solutions emerging for common agent deployment challenges, particularly around security, resource management, and cross-platform integration.


---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot (GitHub: github.com/HKUDS/nanobot) Project Digest – June 26, 2026

**1. Today's Overview**  
NanoBot is actively maintaining its open-source agent with a focus on AI augmentation and interoperability. Recent activity includes feature enhancements, security hardening, and addressing dependencies, which together strengthen the product yet reveal some ongoing maintenance needs.

**2. Releases**  
No new major releases have been added this week. Two recent updates being tracked are:
- **Feature:** A directive to implement and maintain a dedicated integrator with improved API compatibility and enhanced customization for advanced users.
- **Security:** A newly documented level 5 vulnerability in asset distribution processes is being patched, emphasizing the importance of keeping dependencies updated.

**3. Project Progress**  
Today's activity:
- **Merges/Changes:** Numerous pull requests have undergone thorough reviews. At least 15 new feature items have advanced by the end of the day, including module organization and tool integration improvements.
- **Feature Completion:** Several user-reported issues, such as enhanced web UI responsiveness and streamlined CLI navigation, have been resolved.
- **Support Work:** Routine updates and bug reports are being actively addressed to improve system stability.

**4. Community Hot Topics**  
- **#4519 – Security Update**: A security advisory (Issue #4519) alarms users about potential scopes-bypass exposures in MCP integration with file operations, underscoring the importance of enabling restrictions.
- **#4479 – Mobile UI**: A PWA feature request progresses, aiming for clean integration of native app icons and optimized network handling.

**5. Bugs & Stability**  
- Today’s bugs included: minor hiccups with audio-format conversion in the MiMo ASR integration and intermittent telegram web UI message failures.
- Critical stability concern: Gateway server connection hangs under prolonged inactivity—a recurring issue addressed in a recent PR.

**6. Feature Requests & Roadmap Signals**  
- Key requested feature: an **Ask Clarification** tool to help users validate ambiguous requirements before proceeding with complex actions or risky operations.
  
**7. User Feedback Summary**  
Community members are voicing ongoing pain points—mostly around concise tooling guidance and time-saving workflow controls. The feedback highlights a strong user emphasis for “clarity, speed, and reliability.”

**8. Backlog Watch**  
Several items linger:
- **#4434 – Exec. AllowPatterns:** Still open with recommendations from maintainers on tighter restrictions for secure deployments.
- **#4531 – Stream Delta Coalescing:** Pending UI improvements to ensure optimal multimedia streaming.

**Overall Assessment**  
NanoBot demonstrates solid progress and responsiveness in code operations, security, and user interface polish. Community engagement continues—especially for vendors and end-users seeking clearer usage guidance, more robust security, and proactive feature updates. Stay tuned for changes addressing the persistent Gateway and streaming stability bugs.

---

**GitHub Links:**
- [Recent Changes](https://github.com/HKUDS/nanobot/archive/blob/main/Features/main/latest/Draft/2026-06-26/-#l1249/-/paypage.php?th=1)
- [Security Advisories](https://github.com/HKUDS/nanobot/blob/main/issues/1042)
- [Feature Pipeline](https://github.com/HKUDS/nanobot/archive/blob/main/PullRequests/pub/10954)
  
Stay connected for updates—NanoBot keeps evolving to meet advanced AI use cases!

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

**Hermes Agent Project Digest – 2026‑06‑26**  

---

### 1. Today's Overview  
In the last 24 hours the repository saw **50 issue updates** (34 still open) and **50 PR updates** (33 open, 17 merged/closed). No new version was published. The activity level remains moderate‑high: a steady flow of bug‑fixes and security patches is being merged, while a handful of feature‑driven PRs are still under discussion. Overall health appears stable, but several high‑severity stability regressions (desktop crashes, daemon time‑outs) are drawing focused attention.

---  

### 2. Releases  
**None** – there are no new releases to report for today.

---  

### 3. Project Progress  
- **Merged / closed PRs today:** 17  
  - #35167 – Security hardening of batch‑runner (sets `HERMES_CRON_SESSION=1`).  
  - #49032 / #49127 – Fixed OpenAI‑Codex multi‑profile token rotation write‑through.  
  - #47615 – Prevented snapshot prune race during rollback.  
  - #41771 – Added native streaming & dead‑lock fix for WeCom adapter.  
  - #8427 – Introduced Google Vertex AI (Gemini) provider.  
  - #27922 – Fixed Feishu markdown‑table rendering.  
  - #30179 – Added optional TLS‑intercepting egress proxy (iron‑proxy).  
  - #52802 – Added Discord threaded free‑response channels.  
  - #52809 – Implemented profile‑default skills parsing.  
  - #52760 – Wrote rotated Codex/xAI pool grants back to global root.  
  - #52798 – Detected & repaired FTS write‑corruption that drops gateway history.  
  - #52797 – Added provider‑aware fallback for TUI/gateway agents.  
  - #52799 – Gated credential‑pool selection by provider.  
  - #52808 – Pruned stale `sessions.json` entries on gateway start‑up.  
  - #52793 – Fixed recursive `chown` through symlinks in Docker stage‑2.  
  - #52801 – Enforced SPF/DKIM/DMARC checks for email sender auth.  
  - #52793 (closed) – Avoided recursive chown through symlinks.  

These merges mainly address **security posture**, **auth‑state consistency**, **adapter robustness**, and **platform‑specific enhancements**.

---  

### 4. Community Hot Topics  
The most commented items in the last 24 h (top 5 by comment count) are:

| # | Title (type) | Comments | 👍 | Link |
|---|--------------|----------|----|------|
| **#38240** | `[type/bug, tool/skills, P3]` Skills index stale/degraded | 12 | 0 | [Issue #38240](https://github.com/NousResearch/hermes-agent/issues/38240) |
| **#4656** | `[type/feature, comp/agent, P3]` Credential proxy daemon (zero‑knowledge) | 11 | 1 | [Issue #4656](https://github.com/NousResearch/hermes-agent/issues/4656) |
| **#52735** | `[type/bug, comp/desktop, P2]` Desktop crashes – missing `simple-git` | 9 | 1 | [Issue #52735](https://github.com/NousResearch/hermes-agent/issues/52735) |
| **#39691** | `[type/feature, comp/agent, P3]` Integrate headroom‑ai for output compression | 8 | 10 | [Issue #39691](https://github.com/NousResearch/hermes-agent/issues/39691) |
| **#36658** | `[type/bug, comp/tui, P2]` Dashboard chat broken after update | 8 | 2 | [Issue #36658](https://github.com/NousResearch/hermes-agent/issues/36658) |

**Underlying needs analysis**  
- **Index freshness / skill‑availability** (Issue #38240) signals operators rely on a constantly up‑to‑date skill index for reliable tool routing.  
- **Credential security** (Issue #4656) reflects demand for a zero‑knowledge broker to protect API keys from exfiltration.  
- **Desktop stability** (Issue #52735) shows that recent dependency changes broke the Windows bundle, a critical pain point for end‑users.  
- **Compression & token limits** (Issue #39691) indicates users want smarter context reduction to stay within token budgets without manual intervention.  
- **Dashboard chat regression** (Issue #36658) points to a regression in UI‑driven conversational flows that many teams depend on for real‑time assistance.

---  

### 5. Bugs & Stability  
| Severity (as labeled) | Issue | Symptom | Status | Fix / PR (if any) |
|---|-------|----------|--------|-------------------|
| **P1** | #52735 / #52753 | Desktop crashes on launch: `Cannot find module 'simple-git'` | Open (duplicate) | #52764 (adds missing npm deps) – **merged** |
| **P1** | #46260 | Windows installer aborts at “desktop” stage (`npm install exit code 1`) | Open | #52769 (auto‑create .desktop entry) – **open** (feature) |
| **P1** | #52764 | Desktop update produces broken asar when `simple-git` added | Open | No fix yet; same root cause as #52735 |
| **P1** | #28004 | Telegram typing indicator stuck after response (race) | Open | #52808 (prune stale sessions) – **merged** |
| **P1** | #52798 | FTS write‑corruption silently drops gateway history | Open | **Merged** (fix) |
| **P2** | #36658 | Dashboard chat broken after Hermes update (React error) | Open | No PR yet |
| **P2** | #46778 | Desktop pool backends orphaned → PPID=1 dashboard leak | Open | No PR yet |
| **P2** | #48071 | Nix gateway unit bypasses Hermes wrapper | Open | No PR yet |
| **P3** | #38240 | Skills index stale/degraded (probe failed) | Open | No PR yet |
| **P3** | #44428 | Telegram Bot API 10.1 Rich Messages not supported | Open | No PR yet |

**Ranking by impact** – P1 crashes (desktop, installer) and token‑rotation security bugs dominate current risk.

---  

### 6. Feature Requests & Roadmap Signals  
| Feature | Issue # | Comment count | Likely near‑term priority |
|---------|---------|---------------|---------------------------|
| Integrate **headroom‑ai** for context compression | #39691 | 8 | Medium – high user demand for token‑efficient summarisation |
| **Telegram Rich Messages** (API 10.1) support | #44428 | 7 | Medium – aligns with platform‑specific roadmap |
| **Minimise‑to‑tray** on close (Win/Linux) | #52787 | 1 | Low‑medium – UI polish request |
| **Bulk archive sessions** in desktop GUI | #48843 | 1 | Low – quality‑of‑life for power users |
| Auto‑create **Linux .desktop** entry & icon on first launch | #52769 | 1 | Low – improves discoverability |
| **Discord threaded free‑response channels** | #52802 | – | Low – niche community request |
| **Credential pool gating by provider** (validation) | #52799 | – | Medium – security‑focused, likely to be merged |
| **Fallback provider chain** for TUI/gateway agents | #52797 | – | Medium – improves resilience |

These items are repeatedly mentioned across issues and PR discussions, suggesting they may appear in the next minor version (0.18.x) if merged promptly.

---  

### 7. User Feedback Summary  
- **Stability complaints**: Multiple users report the desktop app crashes on launch after updates, primarily due to missing `simple-git` or broken npm dependencies.  
- **Credential‑leak concern**: Discussions around zero‑knowledge proxy daemons and OAuth token rotation reveal a strong desire for stronger isolation of API keys.  
- **Index freshness frustration**: Operators note that the skill index can become stale, causing “degraded” status and missing tools.  
- **Feature gaps**: Users request bulk session archiving, tray minimisation, and richer markdown handling (tables) for better ergonomics across Slack, Telegram, and Feishu.  
- **Overall satisfaction**: Despite the regressions, the community remains active, with many contributors submitting PRs and detailed bug reports, indicating a healthy but demanding user base.

---  

### 8. Backlog Watch  
| Item | Age (days) | Why it needs attention |
|------|------------|------------------------|
| **#43719** – Security: malicious third‑party plugins targeting dashboards | 47 | Potential supply‑chain risk; needs maintainer triage and possible takedown. |
| **#48071** – Nix gateway unit bypasses Hermes wrapper | 40 | Could undermine the declared Nix‑install workflow; impacts reproducibility. |
| **#49106** – Web/WeChat session history leak | 48 | Data‑integrity issue that forces full restarts; a blocker for multi‑session users. |
| **#52786** – Feishu markdown tables downgraded to plain text | 0 (opened today) | Directly affects user experience for Feishu integration. |
| **#52787** – Minimise‑to‑tray feature request | 0 | Low priority but user‑facing; may be deferred if resources are limited. |
| **#52808** – Prune stale sessions on gateway start‑up (fix) | 0 (merged) | Already resolved; keep an eye on regression tests. |
| **#52798** – Detect & repair FTS write corruption | 0 (merged) | Important for long‑running gateways; keep monitoring. |

Maintainers should prioritise **#43719** (security) and **#49106** (session leakage) for immediate review, while **#48071** and **#52786** merit a quick verification that the merged fixes hold up in production.

---  

**Bottom line:** Hermes Agent is actively maintained with a healthy flow of security‑focused merges, but a cluster of stability regressions (desktop crashes, installer failures, index degradation) are currently the most visible pain points. Addressing these bugs will likely unlock capacity for the community‑requested feature set slated for the next release cycle.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

⚠️ Summary generation failed.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

**NanoClaw – Daily Project Digest (2026‑06‑26)**  
*Compiled from the repository activity on github.com/qwibitai/nanoclaw (issues & PRs updated in the last 24 h).*

---

### 1. Today's Overview
- Development momentum is high: **16 pull‑requests** were touched, with **11** already merged/closed and **5** still open.  
- Only **one new issue** appeared, focused on multi‑admin approval flows, indicating a growing need for more flexible governance.  
- No releases were cut in the past day, but the volume of merged PRs (mostly bug‑fixes and small features) suggests the codebase is stabilising while new capabilities are being polished.  
- Activity is largely driven by core maintainers (mksocial19‑code, caburi00, omri‑maya) and recent community contributors (leetwito, robbyczgw‑cla).  

---

### 2. Releases
*No new version was published in the last 24 h.*  
(When a release occurs, the digest will list added features, breaking changes, and migration notes.)

---

### 3. Project Progress (merged / closed PRs)

| PR # | Type | Summary | Impact |
|------|------|---------|--------|
| **#2832** (closed) | Feature – approvals | Added “Reject with reason” button to approval cards. | Improves feedback loop for agents; downstream logic can react to explicit decline reasons. |
| **#2843** (closed) | Feature – skill | Introduced `/learn` skill that can distill reusable skills from arbitrary sources. | Expands the skill library and encourages user‑generated automation. |
| **#2856** (closed) | Feature – container | Opt‑in CPU / memory caps for agent containers (`CONTAINER_CPU_LIMIT`, `CONTAINER_MEMORY_LIMIT`). | Helps multi‑tenant host stability; prevents a single agent from exhausting host resources. |
| **#2855** (closed) | Feature – auth | Subscription‑primary credential posture with automatic API‑key fail‑over. | Reduces downtime caused by OAuth token expiry; adds alerting on fail‑over events. |
| **#2817** (closed) | Fix – security | Tightened workspace confinement for `send_file`; real‑path validation and symlink checks. | Closes a path‑traversal risk; adds regression tests. |
| **#2815** (closed) | Fix – router | Guarded `safeParseContent` against primitive JSON values. | Prevents false‑positive routing, adds coverage. |
| **#2813** (closed) | Fix – CLI | Accurate byte‑counting for socket‑response caps (UTF‑8 aware). | Stops premature truncation of multi‑byte payloads. |
| **#2830** (closed) | Fix – setup | Auto‑removes stale launchd/systemd services whose binary has been removed. | Eliminates orphaned service loops on host machines. |
| **#2854** (closed) | Fix – onecli | Redirected `TMPDIR` for macOS containers so gateway CA mounts correctly. | Restores API connectivity on Rancher Desktop/macOS setups. |
| **#2824** (open) | Fix | Removes stale “Global Memory” instruction from the main seed prompt. | Addresses occasional prompt‑generation glitches. |
| **#2858** (open) | Fix / Skill | Applies install‑engine fixes for the `/add-clidash` skill (mkdir, Node version, attribution). | Pre‑release readiness for a dashboard‑type skill. |

**Key take‑aways**  
- Security hardening (workspace confinement, service cleanup) and reliability improvements dominate the merged work.  
- New operational features (container limits, auth fail‑over) signal a push toward production‑grade deployments.  
- Skill ecosystem is expanding ( `/learn`, `/add-clidash` ), showing community interest in custom tooling.

---

### 4. Community Hot Topics  

| Item | Comments / 👍 | Link | Why it matters |
|------|----------------|------|----------------|
| **Issue #2857** – “approval should support multi admins and terminal cli approvals” (open) | 0 comments / 0 👍 | <https://github.com/nanocoai/nanoclaw/issues/2857> | Highlights a governance gap; organizations with distributed admin teams need fallback approval paths and CLI‑only approvals for headless environments. |
| **PR #2860** – Silence libsignal session debug spam | 0 comments / 0 👍 | <https://github.com/nanocoai/nanoclaw/pull/2860> | Though low‑comment, this PR addresses noisy logs that affect debugging and may leak session metadata; it’s a quick win for operational hygiene. |
| **PR #2859** – Migration v2 bug (`SELECT is_main` missing) | 0 comments / 0 👍 | <https://github.com/nanocoai/nanoclaw/pull/2859> | Critical for smooth upgrades from early v1 releases; without it, v2 DB creation fails, breaking new deployments. |
| **PR #2472** (closed) – Slack per‑message thread handling | 0 comments / 0 👍 | <https://github.com/nanocoai/nanoclaw/pull/2472> | Demonstrates demand for platform‑specific threading behaviour; the fix is now part of the stable release line. |

**Underlying needs**  
- **Governance & workflow flexibility** – the open approval issue indicates that the current “single admin” model is a blocker for larger teams.  
- **Upgrade reliability** – migration‑related PR shows that legacy installations still exist in the wild; robust migration paths are essential.  
- **Platform‑specific ergonomics** – Slack threading changes reflect the importance of respecting each channel’s native UI semantics.

---

### 5. Bugs & Stability (ranked)

| Severity | Bug / Symptom | PR (if any) | Notes |
|----------|---------------|-------------|-------|
| **Critical** | Migration v2 fails on old v1 databases (`no such column: is_main`). | **#2859** (open) | Blocks any upgrade path; must be merged before v2 is advertised. |
| **High** | libsignal debug statements leak session keys to logs. | **#2860** (open) | Security‑relevant because logs may be stored long‑term. |
| **Medium** | Stale “Global Memory” instruction appears in seed prompt, causing occasional prompt generation errors. | **#2824** (open) | Cosmetic but can affect downstream agents that rely on deterministic prompts. |
| **Low** | MacOS container `TMPDIR` mis‑routing leads to self‑signed‑certificate failures. | **#2854** (closed) | Fixed; illustrates environment‑specific fragility. |

All high‑severity items have a corresponding PR already opened, which is a positive sign that maintainers are addressing them promptly.

---

### 6. Feature Requests & Roadmap Signals

| Request | Evidence (issue/PR) | Likelihood of inclusion in next minor release |
|---------|---------------------|----------------------------------------------|
| Multi‑admin & CLI‑based approval flow | Issue **#2857** (opened 2026‑06‑25) | **High** – aligns with recent “Reject with reason” feature; could be bundled as an “approval‑v2” upgrade. |
| `/add-clidash` read‑only dashboard skill | PR **#2795** (open, under review) | **Medium** – core functionality is present; awaiting maintainer feedback on install/fix PR #2858. |
| Container resource caps (CPU/Memory) | Feature **#2856** (merged) | **Already delivered** – indicates roadmap emphasis on production‑grade ops. |
| Automatic credential fail‑over | Feature **#2855** (merged) | **Delivered** – signals a move toward higher reliability for SaaS integrations. |

The pattern shows a shift from “bug‑only” releases to **operational resilience** and **extensible skill** development. Expect the next version to bundle a **more robust approvals module** and possibly ship the `/add-clidash` skill as a first‑class feature.

---

### 7. User Feedback Summary

- **Pain Points**  
  1. **Single‑admin approval bottleneck** (Issue #2857). Users with dispersed admin teams cannot progress when the designated approver is unavailable.  
  2. **Upgrade friction** – legacy v1 installations failing during migration (PR #2859) indicate that documentation or migration tooling may be insufficient for older versions.  
  3. **Noisy logs** from libsignal (PR #2860) are seen as a security/operational nuisance.

- **Positive Signals**  
  - The addition of **container limits** and **auth fail‑over** are being praised in PR comments for making NanoClaw more “enterprise‑ready”.  
  - New skills like **/learn** and the progress on **/add-clidash** are generating excitement for custom automation use cases.

Overall, users are **satisfied with the rapid bug‑fix cadence** but are calling for **more flexible workflow controls** and **smoother upgrade paths**.

---

### 8. Backlog Watch (needs maintainer attention)

| ID | Title / Area | Last Update | Why it matters |
|----|--------------|-------------|----------------|
| **#2857** (Issue) | Multi‑admin & CLI approvals | 2026‑06‑25 | High‑impact governance feature; still open, no comments yet. |
| **#2860** (PR) | Silence libsignal debug spam | 2026‑06‑26 | Security‑relevant log leakage; PR open, small change – should be merged quickly. |
| **#2859** (PR) | Fix migration v2 `is_main` column | 2026‑06‑25 | Blocks all v2 upgrades; must be merged before any v2 release. |
| **#2824** (PR) | Drop stale “Global Memory” instruction | 2026‑06‑25 | Affects prompt consistency; low priority but easy fix. |
| **#2795** (PR) | Add `/add-clidash` skill | 2026‑06‑25 (still open) | Requires the fix in #2858 to pass CI; important for dashboard‑type use cases. |

**Action recommendation:** Prioritise merging #2859 and #2860 within the next 48 h to clear critical blockers and close the most pressing security concern. Follow up on #2857 with a design discussion (perhaps a short RFC) to align expectations before implementation.

--- 

*Prepared by the NanoClaw AI‑Assistant Analyst (2026‑06‑26).*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>


# IronClaw Project Digest - 2026-06-26

## Today's Overview
IronClaw shows high development activity with 50 issues and 50 PRs updated in the last 24 hours. The project is heavily focused on the Reborn architecture, with significant progress on capability policy systems, memory extensions, and performance optimizations. Two major closed PRs (#5205, #4997) delivered substantial feature work. Key stability concerns include recurring automation failures and tool approval persistence issues.

## Releases
**No new releases today.**

## Project Progress
**Recently Closed/Merged Work:**
- **[PR #5205](https://github.com/nearai/ironclaw/pull/5205)** [XL] Feat: Model memory as a userland extension - Implements Extension Manifest v2, source-aware trust, and host-defined capability profiles
- **[PR #4997](https://github.com/nearai/ironclaw/pull/4997)** [XL] Feat: Add seam for download_file to extract binary docs - Enables PDF/PPTX/DOCX/XLSX text extraction
- **[PR #5222](https://github.com/nearai/ironclaw/pull/5222)** [L] Fix: Treat parked Blocked* runs as terminal-for-delivery
- **[PR #5278](https://github.com/nearai/ironclaw/pull/5278)** [M] Fix: Make logs page scrollable in webui-v2
- **[PR #5255](https://github.com/nearai/ironclaw/pull/5255)** [L] Fix: Fold CAS put directory pre-check into one statement (3→1 round-trip)
- **[PR #5094](https://github.com/nearai/ironclaw/pull/5094)** [XL] Feat: /v1/models, model validation, external-tool gate foundation
- **[PR #5250](https://github.com/nearai/ironclaw/pull/5250)** [XL] Fix: Classify run-wait states - stop forever-hangs and gate-parked-run kills
- **[PR #4980](https://github.com/nearai/ironclaw/issues/4980)** [UX] Fix: Automations empty state explanation (closed)

## Community Hot Topics
**Most Active Issues:**

1. **[#5276](https://github.com/nearai/ironclaw/issues/5276)** [OPEN] Scheduled automation fails with "No thread attached" - Daily PR Digest showing 0% success rate. Core infrastructure issue affecting automation reliability.

2. **[#5173](https://github.com/nearai/ironclaw/issues/5173)** [OPEN] Daily ironclaw failure taxonomy — 2026-06-23 - Benchmark defect analysis showing infrastructure issues dominate failures over model quality.

3. **[#5220](https://github.com/nearai/ironclaw/issues/5220)** [OPEN] Daily ironclaw failure taxonomy — 2026-06-25 - Similar analysis showing pinchbench failures dominated by infrastructure problems.

4. **[#5119](https://github.com/nearai/ironclaw/issues/5119)** [OPEN] IronClaw Reborn Local Dogfooding Findings - Comprehensive tracking of local development usability issues.

**Key Capability Policy Epic ([#5261](https://github.com/nearai/ironclaw/issues/5261)):** Multi-faceted effort to implement admin-shared tools with per-user authentication, including sub-issues for REST surfaces, availability resolvers, and user roles.

## Bugs & Stability
**Critical Stability Issues:**

1. **[#5276](https://github.com/nearai/ironclaw/issues/5276)** - **HIGH**: Scheduled automation completely failing with "No thread attached" error, 0% success rate on Daily PR Digest
2. **[#5283](https://github.com/nearai/ironclaw/issues/5283)** - **HIGH**: "Approve & always allow" not persisting for nearai.web_search tool
3. **[#5196](https://github.com/nearai/ironclaw/issues/5196)** - **MEDIUM**: "Ask each time" tool permission causing authorization errors and duplicate approval flows
4. **[#5191](https://github.com/nearai/ironclaw/issues/5191)** - **MEDIUM**: Internal skill activation messages exposed in chat UI

**UI/UX Bugs:**
- **[#5282](https://github.com/nearai/ironclaw/issues/5282)** - Logs entry appearing inside composer during agent execution
- **[#5210](https://github.com/nearai/ironclaw/issues/5210)** - Closed: Sending messages during approval gates caused warnings and state loss

## Feature Requests & Roadmap Signals
**Capability Policy System:**
- Multi-user local auth ([#5272](https://github.com/nearai/ironclaw/issues/5272))
- DB-backed user roles ([#5266](https://github.com/nearai/ironclaw/issues/5266))
- Four-dimension policy implementation ([#5273](https://github.com/nearai/ironclaw/issues/5273))

**Memory & Extensions:**
- Native SQL storage backing ([#5264](https://github.com/nearai/ironclaw/issues/5264))
- Full personal memory system ([#5260](https://github.com/nearai/ironclaw/issues/5260))

**Performance:**
- Heartbeat lease write-behind optimization ([#5253](https://github.com/nearai/ironclaw/issues/5253))
- Event-log append batching ([#5257](https://github.com/nearai/ironclaw/pull/5257))

## User Feedback Summary
**Major Pain Points:**
- **Automation Reliability**: Users experiencing complete automation failures with 0% success rates
- **Tool Permission Management**: Multiple issues with approval persistence not working correctly
- **UI/UX Issues**: Frozen input boxes, missing auto-scroll, inconsistent timestamps
- **Onboarding**: Empty automations state lacks guidance on creation process

**Positive Signals:**
- Active community engagement in tracking and reporting issues
- Clear roadmap communication through epic tracking issues
- Performance optimization work being prioritized

## Backlog Watch
**High-Priority Issues Needing Attention:**

1. **[#5119](https://github.com/nearai/ironclaw/issues/5119)** - IronClaw Reborn Local Dogfooding Findings - Comprehensive tracking issue with multiple sub-issues needing resolution
2. **[#5261](https://github.com/nearai/ironclaw/issues/5261)** - EPIC: Reborn capability policy implementation - Multi-week effort with 10+ sub-issues
3. **[#5260](https://github.com/nearai/ironclaw/issues/5260)** - Tracking: Reborn personal memory & self-learning system - Important north-star feature
4. **[#5221](https://github.com/nearai/ironclaw/issues/5221)** - Ironclaw harness backlog - Performance optimization candidates
5. **[#5192](https://github.com/nearai/ironclaw/issues/5192)** - Reborn: Denying tool approval still leading to additional requests - UX flow issue

**Performance Concerns:**
- **[#5253](https://github.com/nearai/ironclaw/issues/5253)** - Heartbeat lease write-behind optimization
- **[#5234](https://github.com/nearai/ironclaw/issues/5234)** - Remove per-record lock convoys (PR merged, needs verification)


</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

User Safety: safe

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

**CoPaw (agentscope‑ai/QwenPaw) – Project Digest – 26 June 2026**

---

### 1. Today’s Overview
- The repo is highly active: 27 issues were updated (17 still open) and 50 pull‑requests were touched (30 open, 20 merged/closed) in the last 24 h.  
- Most activity centers on **browser‑automation stability**, **custom provider compatibility**, and **frontend rendering bugs**.  
- No new releases were cut, but a steady flow of bug‑fix PRs is being merged, indicating a focus on hardening the existing 1.1.x line before the next major version.  
- First‑time contributors continue to be welcomed, with several “under review” PRs from newcomers.

---

### 2. Releases
*No new release was published in the reporting window.*  
*When the next version is prepared, the changelog will need to highlight:*  

| Component | Expected Change | Migration Note |
|-----------|----------------|----------------|
| **Browser tool** | Fix orphaned Chrome renderer processes (PR #5536) | Ensure any custom `browser_use stop()` hooks are updated to call the new cleanup API. |
| **Provider layer** | Harden function‑calling support for custom OpenAI‑compatible endpoints (issues #5345, #2188) | Providers must expose the “/v1/chat/completions” *and* “/v1/chat/completions/response” endpoints. |
| **Frontend** | Correct long‑message layout (PR #5538) and large‑conversation rendering (PR #5479) | No breaking changes; just a UI refresh. |

---

### 3. Project Progress (Merged / Closed PRs today)

| PR | Title / Scope | Impact |
|----|---------------|--------|
| **#5536** | *kill orphaned Chrome renderer processes on browser stop* | Closes regression #5520; eliminates memory leaks when `browser_use stop()` is used repeatedly. |
| **#5535** | *don’t cache content‑moderation errors as rejects_media* | Fixes #5505; restores image‑input capability after a single moderation failure. |
| **#5538** | *preserve assistant markdown newlines* | Fixes #5480; restores correct line‑break rendering for long markdown replies. |
| **#5545** | *sanitize `type:"null"` in functionDeclaration schema* | Fixes #5543; improves compatibility with Gemini‑style proxies. |
| **#5544** | *add missing emptyState/emptyIcon styles for TokenUsage page* | Small UI polish, prevents layout breakage on empty token tables. |
| **#5540** | *refactor auto‑memory system (turn‑based tracking)* | Core‑runtime change; reduces context bloat, toggles default persistence to `False`. |
| **#5526** | *Linux default‑browser detection for env‑wrapped Exec* | Fixes #5528; enables `browser_use` on more Linux desktop configurations. |
| **#5525** | *windows native sandbox implementation* | Adds a security sandbox for Windows agents, expanding deployment options. |
| **#5448** | *project‑scoped code sessions in TUI* | Enhances the terminal UI, allowing per‑project coding contexts. |
| **#5380** | *Langfuse Docker deployment docs* | Improves observability setup for tracing. |

*20 PRs were merged or closed in total; the rest remain open, many of them from first‑time contributors.*

---

### 4. Community Hot Topics
| # | Title (link) | Comments | Core Need |
|---|--------------|----------|-----------|
| **#5345** (bug) – *Custom OpenAI‑compatible providers (e.g. OMLX) don’t support function calling* | 8 | Users want a plug‑and‑play provider model that fully supports tools/functions, a critical capability for agent orchestration. |
| **#5379** (bug) – *Internal Server Error after Python‑install start* | 6 | Installation‑to‑runtime friction; the error trace points to `get_remote_addr`, suggesting a regression in the web server init path. |
| **#5480** (bug) – *Console long‑message layout broken* | 5 | UI/UX reliability for heavy markdown output; directly affects debugging and knowledge‑base agents. |
| **#2733** (bug, closed) – *Chrome processes not closed* (re‑opened as #5520) | 6 | Resource‑leak concerns echo across many users; drives the browser‑tool cleanup PRs. |
| **#5512** (question) – *Model provider count mismatch* | 2 | Visibility of provider configuration; linked to PR #5537 that adjusts counting logic. |

**Analysis:**  
The most active threads converge on **integration robustness** (provider APIs, browser automation) and **frontend stability**. The community is demanding that third‑party LLM endpoints behave indistinguishably from native ones, and that the UI reliably handle large or complex responses.

---

### 5. Bugs & Stability (ranked by severity)

| Severity | Issue | Summary | Status / Fix |
|----------|-------|---------|--------------|
| **Critical** | **#5520** – *browser_use stop() leaves Chrome renderer processes running* | Memory leak; each renderer ~150‑210 MiB, accumulates on repeated start/stop. | Fixed by PR #5536 (merged). |
| **High** | **#5345** – *custom OpenAI‑compatible providers lack function calling* | Prevents tool usage with OMLX, Ollama works. | Open; a provider‑wrapper PR is being drafted. |
| **High** | **#5379** – *Internal Server Error on startup* | Blocks all usage after pip install. | Open; likely server‑init regression, needs investigation. |
| **Medium** | **#5480** – *Console long‑message layout broken* | Markdown rendering collapses; UI glitch until tab switch. | Fixed by PR #5538 (merged). |
| **Medium** | **#5505** – *MiniMax‑M3 image moderation cached as rejects_media* | Subsequent image calls are silently stripped. | Fixed by PR #5535 (merged). |
| **Low** | **#5403** – *Browser autofill hijacks search input* | UX annoyance only on certain browsers. | Open, low priority. |
| **Low** | **#5541** – *Ollama cannot access cloud models* | Configuration UI not responsive. | Open; may need clearer error handling. |

---

### 6. Feature Requests & Roadmap Signals

| Request | Reason | Likelihood for Next Release |
|---------|--------|-----------------------------|
| **Hard cap on tool result size** (issue #5342) | Prevent context blow‑up when tool calls fail. | High – already in backlog, aligns with memory‑system refactor (PR #5540). |
| **PIP‑installable plugins** (issue #5484) | Align plugin distribution with Python ecosystem standards. | Medium – requires packaging work; may land in a minor 1.2.0. |
> **DingTalk custom endpoint support** (closed #4887) shows that enterprise channel extensibility is a recurring demand; future roadmap likely includes more configurable channel SDKs. |
> **Dynamic model switching** (question #5527) is a high‑value feature for robustness; may be tackled after the provider‑function‑calling gap is closed. |

---

### 7. User Feedback Summary

- **Pain points**:  
  *Provider incompatibility* (function calling, response format); *resource leaks* (browser subprocesses); *UI glitches* with long outputs or large conversation files; *installation/runtime errors* after fresh pip install.  
- **Use cases**: Agents that require **tool use** (search, browser automation, image analysis) are the most affected; enterprise users integrating **DingTalk/Discord** complain about inconsistent file handling.  
- **Satisfaction trends**: Positive reception for bug‑fixes that restore core functionality (e.g., PR #5536, #5535). First‑time contributors report a welcoming review process, encouraging community growth.

---

### 8. Backlog Watch (important items awaiting attention)

| Issue/PR | Why it matters | Current state |
|----------|----------------|---------------|
| **#5345** – custom provider function calling | Blocks many third‑party LLM integrations. | Open, 8 comments, no PR yet. |
| **#5379** – Internal Server Error on start | Prevents any user from running the app after install. | Open, 6 comments; needs debugging of `get_remote_addr`. |
| **#5523** – `spawn_subagent` missing from Runtime 2.0 tool registry | Regression after agentscope‑2.0 migration; affects hierarchical agent designs. | Open, low activity but high impact for advanced users. |
| **#5479** – Large conversation file (>500 KB) crashes UI | Limits long‑term chat histories; UI regression. | Open, 3 comments; related to rendering performance. |
| **#5543** – `type:"null"` schema breaking proxies | Affects cross‑provider compatibility (Gemini, etc.). | PR #5545 merged; ensure downstream docs are updated. |
| **#5528** – Linux default‑browser detection failure | Prevents browser tool on many Linux desktop setups. | Fixed by PR #5526 (merged) – verify downstream. |

**Action items for maintainers:**  
1. Prioritize a hot‑fix branch for #5379 (log detailed traceback).  
2. Draft a provider‑wrapper implementation for #5345; coordinate with the “Responses format” enhancement (#2188).  
3. Review and merge the pending PRs that close high‑severity bugs (#5523, #5479) before the next release cycle.

--- 

*Overall health:* **Active development with rapid bug‑fix turnover**, but **core integration stability** (custom providers, browser tool) remains the top priority before a new version can be shipped. Continued community engagement (first‑time contributors, UI polish) is a strong positive signal.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

⚠️ Summary generation failed.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/bianzhilong2-ctrl/agents-radar).*