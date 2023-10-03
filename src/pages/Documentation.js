import { marked } from "marked"
import { Collapse } from "react-collapse"
import { useState } from "react"
import "./styles/documentation.css"

export function Documentation() {
  const installText = `
        ADDING ANY MODS VOIDS SUPPORT FROM THE DEVELOPERS! DO AT YOUR OWN RISK! YOU HAVE BEEN WARNED! FURTHERMORE, IF YOU HAVE THOROUGHLY READ & WATCHED EVERYTHING IN THIS GUIDE & ARE STILL EXPERIENCING ISSUES, PLEASE JOIN OUR DISCORD﻿ HERE﻿ TO RECEIVE DEDICATED SUPPORT FROM OUR COMMUNITY MEMBERS OR A DEVELOPER! THANK YOU FOR TRYING FALLOUT ANOMALY!

        PART 1:
        MINIMUM REQUIREMENTS
        Spoiler:  Show

        While currently undergoing testing on a low-end system, it is strongly recommended to meet, at a minimum, the official system requirements for Fallout 4.
        Minimum System Requirements
        Requires a 64-bit processor and operating system.
        OS: Windows 7/8/10 (64-bit OS required)
        Processor: Intel Core i5-2300 2.8 GHz/AMD Phenom II X4 945 3.0 GHz or equivalent.
        Memory: 8 GB RAM.
        Graphics: NVIDIA GTX 550 Ti 2GB/AMD Radeon HD 7870 2GB or equivalent.
        Storage: 300 GB available space.

        Fallout 4 Recommended Requirements
        CPU: Intel Core i7 4790 3.6 GHz/AMD FX-9590 4.7 GHz or equivalent
        RAM: 8 GB
        VIDEO CARD: NVIDIA GTX 780 3GB/AMD Radeon R9 290X 4GB or equivalent
        DEDICATED VIDEO RAM: 3 GB (4 GB AMD)
        OS: Windows 7/8/10 (64-bit OS required)
        FREE DISK SPACE: 300 GB

        PART 2:
        ADDITIONAL RECOMMENDATIONS
        Spoiler:  Show

        Nexus Premium:
        While not mandatory, Nexus Premium is strongly advised as it streamlines the mod download and installation process, saving you time.
        Storage Space:
        Fallout Anomaly requires approximately 300GB of hard drive space, this includes download side and install size. Installing it on an SSD/NVMe drive is highly recommended for faster installation and loading screens.

        PART 3:
        DETAILED SYSTEM REQUIREMENTS
        Spoiler:  Show

        The Anomaly Team is constantly seeking ways to enhance performance across a variety of systems. Version 0.5 will feature a performance overhaul, but for the best possible experience with Fallout Anomaly, please consider the following recommended setup:

        CPU: A processor with at least 3GHz clock speed.
        GPU: A graphics card with a minimum of 6GB VRAM; 4GB graphics cards might work without ENB, but performance isn't guaranteed.
        RAM: 16GB is recommended; 32GB offers optimal performance but isn't necessary.
        Monitor: A 1440p monitor with a 144Hz refresh rate for optimal visual quality but 1080p will be just fine.
        Storage: An SSD/NVMe drive is highly recommended for faster performance. Fallout Anomaly is designed for optimization across a wide range of systems, but we cannot guarantee optimal performance on HDDs.
        PART 4:
        HARD REQUIREMENTS
        Spoiler:  Show

        Before installing Fallout Anomaly, you must have the following:

        Fallout 4 (Steam English Version)

        Microsoft Visual C++ x64﻿
        .NET Runtime
        300GB of available space on a hard drive/SSD/NVMe
        A clean vanilla game folder - (SEE HOW-TO LINK﻿)
        NO Official High Resolution Texture Pack!!!

        Bethesda published a free 55GB texture pack with upscaled 4K textures that are nowhere near worth the hard drive space, while some textures are an improvement they are not worth the extra hard drive space. Fallout Anomaly comes with its own set of texture replacers that correct the base games more glaring issues! If you had the HD DLC installed previously, you need to disable it in Steam.

        Open Steam and go into your Game Library.
        Go to the Fallout 4 page and click Manage my 8 DLC.
        Uncheck Fallout 4 - High Resolution Texture Pack in the list and click Save.
        ﻿
        NO Creation Club Content!!!
        Is not currently supported at this time. We have disabled it entirely and support will not be offered if you decide to add any of these mods yourself!!!
        PART 5:
        PRE-INSTALLATION
        Spoiler:  Show

        Before installation, configure your system as follows:

        Pagefile Configuration:
        Set up a pagefile with at least 40GB on your drive where Fallout 4 exe. Is located to ensure sufficient memory for the modlist - (SEE HOW-TO LINK)
        Microsoft Visual C++:
        Download and install the latest Visual C++ x64 Redistributable. Like mentioned in "HARD REQUIREMENTS" section!
        Microsoft .NET Runtime:
        Download and install both the Desktop and Console versions of .NET Runtime from the Microsoft website. Like mentioned in "HARD REQUIREMENTS" section!

        PART 6:
        STEAM & FALLOUT 4 SETUP
        Spoiler:  Show

        Ensure that Fallout 4 is fully updated through Steam. Adjust your Steam settings to enable updates only when the game is launched, deactivate the Steam Overlay, and set the game's language to English. Additionally, check that your documents folder, found at Documents/MyGames/Fallout4, contains no files other than [SAVES]. Following this, launch Fallout 4 via Steam, allow the launcher to run, and subsequently close it after any prompts. This process will update the Windows registry.

        HOW-TO UNINSTALL VIDEO:

        HOW-TO VANILLA INSTALL FALLOUT 4 VIDEO:


        PART 7:
        WABBAJACK PREPARATIONS
        Spoiler:  Show

        Create two empty folders named "Wabbajack" and "Fallout Anomaly." Place the Wabbajack.exe file downloaded from the Wabbajack website in the "Wabbajack" folder.

        PART 8:
        MODLIST INSTALLATION
        Spoiler:  Show

        To install Fallout Anomaly, follow these steps:
        Download the latest main file from our Nexus Mods page﻿.
        Run Wabbajack.exe.
        Click "Install From Disk" at the bottom of the window.
        Fill in the required information, including the paths for installation and mod downloads.
        Click the play/right arrow button to start the installation process. It may take several hours to complete.
        HOW-TO INSTALL MODLIST & WABBAJACK VIDEO:

        PART 9(FOR USE W/ UPCOMING UPDATE 0.4.7 & BEYOND):﻿
        WABBAJACK DOWNLOAD ISSUES
        Spoiler:  Show

        Occasionally, you might encounter issues with Wabbajack when attempting to download from Google Drive links. If so, follow these very simple instructions below to fix this.

        Certainly, here are the steps made even simpler:
        1. Go to the Google Drive link﻿ and download the file.

        2. Open Mod Organizer 2 and look for "Fallout Anomaly Master Files" (it's usually at the bottom).

        3. Inside this mod, find the "interface" folder. Now, just take the file you downloaded from Google Drive and drop it into this folder.

        That's it! You're done!

        PART 10(FOR USE W/ UPCOMING UPDATE 0.4.7 & BEYOND):
        BETHINI SETUP
        Spoiler:  Show

        Ensure MO2 is closed and run BethINI.exe from the Fallout Anomaly MO2 tools folder. Follow these steps:
        1. Direct BethINI to your Mod Organizer 2 via the BethINI SETTINGS tab.
        2. Go to "Basic" and apply recommended tweaks, set your resolution, and save.
        3. Avoid changing other settings, as they have been configured by the Fallout Anomaly team. Doing so will void support from staff and you can encounter crashing.

        PART 11:
        MOD ORGANIZER 2
        Spoiler:  Show

        Wabbajack will install a specific copy of Mod Organizer 2 for Fallout Anomaly. Launch Mod Organizer 2 from your Fallout Anomaly folder.
        PART 12:
        ENB PRESETS
        Spoiler:  Show

        ENB is a tool or modification (mod) that significantly enhances the game's graphics by improving elements like lighting and shadows, resulting in a more stunning and realistic game world. Our list provides you with a variety of ENBs to choose from or disable altogether, which can help improve your game's performance. Follow these straightforward steps to understand how to do so:
        Step 1:
        In MO2, locate the "ENB - ONLY ONE ENABLED AT A TIME!" blue separator. Under this separator, you will find all the available presets.
        Step 2:
        Ensure that only one preset is enabled at a time, or disable them all if you are having performance issues.
        Step 3:
        Launch your game and experience the enhanced visuals!

        PART 13:
        LAUNCHING
        Spoiler:  Show

        1. Launch Mod Organizer 2 from your Fallout Anomaly folder.
        2. Select "[F4SE]" from the dropdown menu in the top-right corner.
        3. Click the "Run" button.
        4. Follow any prompts to update the game's registry path if necessary. (This should not request if you have followed the read me)
        5. Create a new game, create your character, and wait for the mods to initialize (this may take a few minutes).

        PART 14:
        POST-INSTALLATION
        Spoiler:  Show

        After installing Fallout Anomaly:
        Play on "Very Hard" difficulty; avoid using Survival mode as it conflicts with certain mod features.
        Open the MCM menu and apply the preset in "MCM SETTINGS MANAGER."
        Enable the "See Through Scopes" patch for tactical reload in the MCM menu.
        Manually activate the Advanced Needs 76 mechanics by enabling system options in each menu for features like the Needs System, Fishing System, and Woodchopping System.
        HOW-TO SETUP IN-GAME VIDEO:


        PART 15:
        UPDATING
        Spoiler:  Show

        To update Fallout Anomaly, use Wabbajack and make sure you have the latest version of the program. Be aware that larger updates may require starting a new save file to avoid corruption. - MAKE SURE TO OVERWRITE INSTALLATION!

        THE END:
        GOOD JOB STALKER!
        IF YOU'VE METICULOUSLY FOLLOWED THESE INSTRUCTIONS, YOU'RE NOW PRIMED TO VENTURE FORTH INTO THE EERIE DEPTHS OF THE ANOMALY! WE IMPLORE YOU TO BOLSTER OUR CAUSE BY GIVING YOUR ENDORSEMENT ON THE NEXUS PAGE AND TRACKING OUR MOVEMENTS ACROSS SOCIAL CHANNELS. YOUR LOYALTY IN THE ZONE IS GREATLY VALUED!

        ~THANK YOU, STALKER!
      `

  const [ isOpen, setIsOpen ] = useState(true)
  const toggleCollapse = () => {
    setIsOpen(!isOpen)
  }

  return(
    <>
      <div className="about-container limit-width-large">
        <button onClick={toggleCollapse}>Toggle</button>
        <Collapse isOpened={isOpen}>
        <div className="install-doc" id="md-text" dangerouslySetInnerHTML={{__html:marked.parse(installText)}}/>
        </Collapse>
      </div>
    </>  )
}
