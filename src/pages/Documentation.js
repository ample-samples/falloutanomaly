import { marked } from "marked"
import { Collapse } from "react-collapse"
import { useState } from "react"
import { Collapsible } from "../components/Collapsible"
import "./styles/documentation.css"

export function Documentation() {
  const p1Title = `PART 1: SYSTEM REQUIREMENTS`
  const p1Body = `## Minimum System Requirements
    Requires a 64-bit processor and operating system.

    OS: Windows 7/8/10 (64-bit OS required)

    Processor: Intel Core i5-2300 2.8 GHz/AMD Phenom II X4 945 3.0 GHz or equivalent.

    Memory: 8 GB RAM.

    Graphics: NVIDIA GTX 550 Ti 2GB/AMD Radeon HD 7870 2GB or equivalent.

    Storage: 300 GB available space.

## Fallout 4 Recommended Requirements
    CPU: Intel Core i7 4790 3.6 GHz/AMD FX-9590 4.7 GHz or equivalent

    RAM: 8 GB

    VIDEO CARD: NVIDIA GTX 780 3GB/AMD Radeon R9 290X 4GB or equivalent

    DEDICATED VIDEO RAM: 3 GB (4 GB AMD)

    OS: Windows 7/8/10 (64-bit OS required)

    FREE DISK SPACE: 300 GB

Note: While currently undergoing testing on a low-end system, it is strongly recommended to meet, at a minimum, the official system requirements for Fallout 4. `

  const installWarning = `ADDING ANY MODS VOIDS SUPPORT FROM THE DEVELOPERS! DO AT YOUR OWN RISK! YOU HAVE BEEN WARNED! FURTHERMORE, IF YOU HAVE THOROUGHLY READ & WATCHED EVERYTHING IN THIS GUIDE & ARE STILL EXPERIENCING ISSUES, PLEASE JOIN OUR 
[DISCORD](https://www.github.com/markedjs/marked) HERE TO RECEIVE DEDICATED SUPPORT FROM OUR COMMUNITY MEMBERS OR A DEVELOPER! THANK YOU FOR TRYING FALLOUT ANOMALY!` 

  const p2Title = ` PART 2: ADDITIONAL RECOMMENDATIONS `
  const p2Body = `
## Nexus Premium:
    While not mandatory, Nexus Premium is strongly advised as it streamlines the mod download and installation process, saving you time.
## Storage Space:
    Fallout Anomaly requires approximately 300GB of hard drive space, this includes download side and install size. Installing it on an SSD/NVMe drive is highly recommended for faster installation and loading screens.`

  const p3Title = ` PART 3: DETAILED SYSTEM REQUIREMENTS `
  const p3Body = `
    Note: The Anomaly Team is constantly seeking ways to enhance performance across a variety of systems. Version 0.5 will feature a performance overhaul, but for the best possible experience with Fallout Anomaly,
##  Please consider the following recommended setup:

    CPU: A processor with at least 3GHz clock speed.

    GPU: A graphics card with a minimum of 6GB VRAM; 4GB graphics cards might work without ENB, but performance isn't guaranteed.

    RAM: 16GB is recommended; 32GB offers optimal performance but isn't necessary.

    Monitor: A 1440p monitor with a 144Hz refresh rate for optimal visual quality but 1080p will be just fine.

    Storage: An SSD/NVMe drive is highly recommended for faster performance. Fallout Anomaly is designed for optimization across a wide range of systems, but we cannot guarantee optimal performance on HDDs. `

  const p4Title = ` PART 4: HARD REQUIREMENTS `
  const p4Body = `
## Before installing Fallout Anomaly, you must have the following:

    Fallout 4 (Steam English Version)

    Microsoft Visual C++ x64﻿

    .NET Runtime

    300GB of available space on a hard drive/SSD/NVMe

    A clean vanilla game folder - (SEE HOW-TO LINK﻿)

## NO Official High Resolution Texture Pack!!!

    (Bethesda published a free 55GB texture pack with upscaled 4K textures that are nowhere near worth the hard drive space, while some textures are an improvement they are not worth the extra hard drive space. Fallout Anomaly comes with its own set of texture replacers that correct the base games more glaring issues! If you had the HD DLC installed previously, you need to disable it in Steam.)

    Open Steam and go into your Game Library.

    Go to the Fallout 4 page and click Manage my 8 DLC.

    Uncheck Fallout 4 - High Resolution Texture Pack in the list and click Save.
    ﻿
## NO Creation Club Content!!!
    Is not currently supported at this time. We have disabled it entirely and support will not be offered if you decide to add any of these mods yourself!!! `
  const p5Title = ` PART 5: PRE-INSTALLATION `
  const p5Body = `
## Pagefile Configuration:
    Set up a pagefile with at least 40GB on your drive where Fallout 4 exe. Is located to ensure sufficient memory for the modlist - (SEE HOW-TO LINK)
## Microsoft Visual C++:
    Download and install the latest Visual C++ x64 Redistributable. Like mentioned in "HARD REQUIREMENTS" section!
## Microsoft .NET Runtime:
    Download and install both the Desktop and Console versions of .NET Runtime from the Microsoft website. Like mentioned in "HARD REQUIREMENTS" section! `

  const p6Title = ` PART 6: STEAM & FALLOUT 4 SETUP `
  const p6Body = `
## A fresh Fallout 4 installation is required
    Ensure that Fallout 4 is fully updated through Steam. Adjust your Steam settings to enable updates only when the game is launched, deactivate the Steam Overlay, and set the game's language to English. Additionally, check that your documents folder, found at Documents/MyGames/Fallout4, contains no files other than [SAVES]. Following this, launch Fallout 4 via Steam, allow the launcher to run, and subsequently close it after any prompts. This process will update the Windows registry.

## HOW-TO UNINSTALL VIDEO:

## HOW-TO VANILLA INSTALL FALLOUT 4 VIDEO: `

  const p7Title = ` PART 7: WABBAJACK PREPARATIONS `
  const p7Body = ` 
    Create two empty folders named "Wabbajack" and "Fallout Anomaly." Place the Wabbajack.exe file downloaded from the Wabbajack website in the "Wabbajack" folder. `

  const p8Title = ` PART 8: MODLIST INSTALLATION `
  const p8Body = `
## To install Fallout Anomaly:
    1. Download the latest main file from our Nexus Mods page﻿.

    2. Run Wabbajack.exe. 

    3. Click "Install From Disk" at the bottom of the window. 

    4. Fill in the required information, including the paths for installation and mod downloads. 

    5. Click the play/right arrow button to start the installation process. It may take several hours to complete. 

## HOW-TO INSTALL MODLIST & WABBAJACK VIDEO:`

  const p9Title = ` PART 9: WABBAJACK DOWNLOAD ISSUES (FOR USE W/ UPCOMING UPDATE 0.4.7 & BEYOND)﻿ `
  const p9Body = `
    Occasionally, you might encounter issues with Wabbajack when attempting to download from Google Drive links. If so, 
## Follow these very simple instructions below to fix it:

    1. Go to the Google Drive link﻿ and download the file.

    2. Open Mod Organizer 2 and look for "Fallout Anomaly Master Files" (it's usually at the bottom).

    3. Inside this mod, find the "interface" folder. Now, just take the file you downloaded from Google Drive and drop it into this folder.

    That's it! You're done! `

  const p10Title = ` PART 10: BETHINI SETUP (FOR USE W/ UPCOMING UPDATE 0.4.7 & BEYOND) `
  const p10Body = `
    Ensure MO2 is closed and run BethINI.exe from the Fallout Anomaly MO2 tools folder. 
## Follow these steps:

    1. Direct BethINI to your Mod Organizer 2 via the BethINI SETTINGS tab.

    2. Go to "Basic" and apply recommended tweaks, set your resolution, and save.

    3. Avoid changing other settings, as they have been configured by the Fallout Anomaly team. Doing so will void support from staff and you can encounter crashing. `

  const p11Title = ` PART 11: MOD ORGANIZER 2 `
  const p11Body = ` 
    Wabbajack will install a specific copy of Mod Organizer 2 for Fallout Anomaly. Launch Mod Organizer 2 from your Fallout Anomaly folder. `

  const p12Title = ` PART 12: ENB PRESETS `
  const p12Body = `
    ENB is a tool or modification (mod) that significantly enhances the game's graphics by improving elements like lighting and shadows, resulting in a more stunning and realistic game world. Our list provides you with a variety of ENBs to choose from or disable altogether, which can help improve your game's performance. 
## Follow these straightforward steps to change your ENB preset:

    1. In MO2, locate the "ENB - ONLY ONE ENABLED AT A TIME!" blue separator. Under this separator, you will find all the available presets.

    2. Ensure that only one preset is enabled at a time, or disable them all if you are having performance issues.

    3. Launch your game and experience the enhanced visuals! `

  const p13Title = ` PART 13: LAUNCHING `
  const p13Body = `
    1. Launch Mod Organizer 2 from your Fallout Anomaly folder.

    2. Select "[F4SE]" from the dropdown menu in the top-right corner.

    3. Click the "Run" button.

    4. Follow any prompts to update the game's registry path if necessary. (This should not request if you have followed the read me)

    5. Create a new game, create your character, and wait for the mods to initialize (this may take a few minutes). `

  const p14Title = ` PART 14: POST-INSTALLATION `
  const p14Body = `
## After installing Fallout Anomaly:
    1. Play on "Very Hard" difficulty; avoid using Survival mode as it conflicts with certain mod features.

    2. Open the MCM menu and apply the preset in "MCM SETTINGS MANAGER."

    3. Enable the "See Through Scopes" patch for tactical reload in the MCM menu.

    4. Manually activate the Advanced Needs 76 mechanics by enabling system options in each menu for features like the Needs System, Fishing System, and Woodchopping System.

## HOW-TO SETUP IN-GAME VIDEO: `

  const p15Title = ` PART 15: UPDATING `
  const p15Body = ` 
    To update Fallout Anomaly, use Wabbajack and make sure you have the latest version of the program. Be aware that larger updates may require starting a new save file to avoid corruption. - MAKE SURE TO OVERWRITE INSTALLATION! `

  const installText = `
    THE END:
    GOOD JOB STALKER!
    IF YOU'VE METICULOUSLY FOLLOWED THESE INSTRUCTIONS, YOU'RE NOW PRIMED TO VENTURE FORTH INTO THE EERIE DEPTHS OF THE ANOMALY! WE IMPLORE YOU TO BOLSTER OUR CAUSE BY GIVING YOUR ENDORSEMENT ON THE NEXUS PAGE AND TRACKING OUR MOVEMENTS ACROSS SOCIAL CHANNELS. YOUR LOYALTY IN THE ZONE IS GREATLY VALUED!

    ~THANK YOU, STALKER! `

  return(
    <div className="install-container limit-width-large">
      <Collapsible title={p1Title} body={p1Body} />
      <Collapsible title={p2Title} body={p2Body} />
      <Collapsible title={p3Title} body={p3Body} />
      <Collapsible title={p4Title} body={p4Body} />
      <Collapsible title={p5Title} body={p5Body} />
      <Collapsible title={p6Title} body={p6Body} />
      <Collapsible title={p7Title} body={p7Body} />
      <Collapsible title={p8Title} body={p8Body} />
      <Collapsible title={p9Title} body={p9Body} />
      <Collapsible title={p10Title} body={p10Body} />
      <Collapsible title={p11Title} body={p11Body} />
      <Collapsible title={p12Title} body={p12Body} />
      <Collapsible title={p13Title} body={p13Body} />
      <Collapsible title={p14Title} body={p14Body} />
      <Collapsible title={p15Title} body={p15Body} />
      <hr />
      <div className="install-doc" dangerouslySetInnerHTML={{__html:marked.parse(installWarning.replace(/^[\u200B\u200C\u200D\u200E\u200F\uFEFF]/,""))}}/>
    </div>
  )
}
