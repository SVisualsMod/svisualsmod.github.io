# SVisuals

Official website: https://svisualsmod.github.io

Download the signed standalone Fabric mod from the website.
Minecraft 1.21.4 and 1.21.11 use separate version-specific JAR files.
Current standalone mod: 18.43.0, revision 3.
Fabric Loader 0.19.5, matching Fabric API and Java 21 are required.
Place the JAR in your Minecraft profile's mods folder. SVisuals Launcher and
an SVisuals account are not required for local gameplay or public CFG downloads.

This repository contains the static public website and immutable public artifacts.
The release metadata carries the exact SHA-256 and an Ed25519 signature.
Private signing keys, server credentials and admin services are not included.
CFG Hub on the website and in the mod use the same protected SVisuals API.
Existing Launcher download URLs are retained for compatibility.

The revision-3 JARs were tested in real Windows worlds, online and API-offline.
Physical macOS standalone acceptance remains pending; Java portability is not
a substitute for a physical Mac game test. Full cross-platform certification,
live owner comment/report moderation and frontend Cloudflare hardening are
separate pending checks. The static website has no production npm dependency
audit findings; upstream build-only dependency advisories remain tracked.
Support: https://t.me/svisualsmodbot
