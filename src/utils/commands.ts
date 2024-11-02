import packageJson from '../../package.json';
import { history } from '../stores/history';

const hostname = window.location.hostname;

export const commands: Record<string, (args: string[]) => Promise<string> | string> = {
  help: () => 'Available commands: ' + Object.keys(commands).join(', '),
  resume : () => {
    return `
Kyle Grah
Senior Back End Software Engineer

-----------------------------------
Profile
-----------------------------------
Senior Software Engineer with 7 years of experience 
building API-based web services in Golang and 
AWS/Kubernetes-based applications.

-----------------------------------
Employment History
-----------------------------------

Senior Back End Software Engineer
Inspectiv, Seattle
December 2022 — July 2024

  - Developed vulnerability detection system in Golang, 
    driving new customer acquisition revenue and improving 
    customer satisfaction.
  - Architected a notifications microservice in Golang, 
    keeping users updated on software vulnerabilities.
  - Diagnosed and resolved critical bugs in legacy API, 
    recovering corrupted production data.
  - Mentored junior engineers, enhancing professional growth.
  - Migrated production customer vulnerability database 
    from GraphQL to PostgreSQL with NATS event streaming 
    for Inspectiv’s go-to-market rebuild.

Back End Software Engineer
MASON, Seattle
December 2020 — September 2022

  - Built WebRTC-based Android remote control streaming 
    service in Golang, enabling remote debugging for 
    over 10,000 devices.
  - Designed a microservice API for storing customer-provided 
    APKs, media, and config files with reflection-based 
    validation.
  - Revamped QA processes, increasing efficiency and 
    collaboration between backend and QA engineers.
  - Provided on-call support for a comprehensive system 
    spanning Golang, JavaScript, Python CLI, and Android.

Full Stack Software Engineer
Igneous, Seattle
December 2018 — December 2020

  - Created VM State Machine service using Golang and 
    Kubernetes, supporting physical customer sites.
  - Designed System View Filtering in Golang, reducing 
    UI load times by up to 90%.
  - Built Data Delete features end-to-end, reducing 
    ticket volume by 20% for Igneous customers.
  - Developed API to downsample customer data metrics, 
    improving load times 10x.
  - Supported critical customer-facing systems with 
    24/7 on-call rotations.

Full Stack Software Engineer
Geniuslink, Seattle
October 2017 — December 2018

  - Developed BookLinker 2.0, enhancing customer experience 
    and generating substantial revenue with faster feature 
    development.
  - Migrated BookLinker 2.0 to a microservice architecture 
    with Jenkins, Nomad, and Consul, reducing deployment 
    time 10x.
  - Created Product Matching Auditor, achieving 90% accuracy 
    in product matching with C# API and Vue frontend.
  - Migrated live customer data from SQL to MongoDB 
    with Python scripts.

-----------------------------------
Education
-----------------------------------
Bachelor of Information Systems
University of Washington, Seattle
September 2013 — June 2017

-----------------------------------
Details
-----------------------------------
Location: Seattle
Email:    kylelgrah@gmail.com

-----------------------------------
Skills
-----------------------------------
Golang | ██████████
Web APIs | ████████
Distributed Systems Architecture | ████████
SQL | ████████
TypeScript | ███████
Event Streaming | ███████
React | ██████
AWS | ██████
Jenkins | █████
Kubernetes | █████
WebRTC | █████
Python | █████
Redis | █████
JavaScript | █████
Docker | █████
MongoDB | ████
Linux | ████
Security Vulnerabilities | ████
Protobuf | ████
NATS | ████

    `
  },
  hostname: () => hostname,
  whoami: () => 'guest',
  date: () => new Date().toLocaleString(),
  echo: (args: string[]) => args.join(' '),
  learn: () => {
    window.open('https://www.geeksforgeeks.org/linux-commands-cheat-sheet/')
    
    return 'Opening Linux commands cheat sheet...';
  },
  sudo: (args: string[]) => {
    window.open('');

    return `Permission denied: unable to run the command '${args[0]}' as root.`;
  },
  github: () => {
    window.open(packageJson.repository.url, '_blank');

    return 'Opening repository...';
  },
  clear: () => {
    history.set([]);

    return '';
  },
  email: () => {
    return `kylelgrah@gmail.com`;
  },
  weather: async (args: string[]) => {
    const city = args.join('+');

    if (!city) {
      return 'Usage: weather [city]. Example: weather Brussels';
    }

    const weather = await fetch(`https://wttr.in/${city}?ATm`);

    return weather.text();
  },
  exit: () => {
    return 'window.close()';
  },
  curl: async (args: string[]) => {
    if (args.length === 0) {
      return 'curl: no URL provided';
    }

    const url = args[0];

    try {
      const response = await fetch(url);
      const data = await response.text();

      return data;
    } catch (error) {
      return `curl: could not fetch URL ${url}. Details: ${error}`;
    }
  },
  banner: () => `
                                                                                                        
                                                                                                    
                                                @@@@                                                
                                                @@@@                                                
                                               @@**@@                                               
                                               @@+=@@                                               
                                              @@%#**@@                                              
                          @@@@             @@@@@#**=%@@@@             @@@@                          
                           @@@@@@     @@@@@%%#*#%**#**#%%@@@@@     @@@@@@                           
                             @@@@@@@@@@#======+@%###@+======#@@@@@@@@@@                             
                               @@%@@@+=======@#*@##@*#@+======+@@@%@@                               
                                 @@%##*=====#@@@@##@@@@%=====*##%@@                                 
                                @@%#@%***%%#@*=*####*=*@#%@***%@%#@@                                
                                @@*=+%@%**#%++*#++++#*++##**%@%+=*@@                                
                                @#***==%@%#####*#**#*#####%@@==***#@@                               
                               @%***===%@#+===*######*===+#@@===***%@                               
                              @@%**===@#+=======*###=======+#@===**%@@                              
                              @@#**=+#+==========+*==========+#+=**#@@                              
                              @@**+=##+========*====*========+##=+**@@                              
                              @%*#+=#*==+***###*=+*=+###****==*%=+#*#@@                             
                             @@#*#+=#*===%@@*++=++=+=+**@@%===*%=+#*#@@                             
                             @@#*%+=%+**=====*+*=++=*+*=====**+%=+%**%@@                            
                            @@%**%+=#*###=**==+*+++**+==+*=###*%==%**%@@                            
                            @@%#*%==####**##*=##+##+##++##**####==%**%@@                            
                           @@@##*@==%@**+##@#*###**#####@##***@@==@**#@@@                           
                           @@#@##@==%@*%*+**##*#*++*#*##**+=++@@==@#*%#@@                           
                          @@%*#%#@+=@@#@+*#+++*++=#++*+++#@@**@@==@#%%*%@@                          
                         @@@#**%@@+=@@@#*===#%+===#@##%@@@@#=@@@=+@@@**#@@@                         
                        @@@@#***@@*=@@@@+*====*===+@@@@@@@*+@@@@=+@@****@@@@                        
                       @@@#@****#@#=@@@@@#========+@@@@@%=#@@@@@=#@#****@#@@@                       
                      @@@#*%**+=+*%=@@@@@@@+======+@@@@*+@@@@@@@=%#*=+**%*#@@@                      
                    @@@%******%==***@@@@@@@@@+%*==*@@#=%@@@@@@@@***==%******%@@@                    
                  @@@@#*+==***#@==+*%@@@@@@@@@@===++=@@@@@@@@@@%**==@#***==+*#@@@@                  
                  @@@#***%%==**%@+=+*@@@@@@@@@@@@@@@@@@@@@@@@@@*+=+@@**==#%****%@@                  
                   @@@%***#%@#+*@@#==#@@@@@@@@@@@@@@@@@@@@@@@@#+=*@@*+#@%#***%@@@                   
                     @@@%#**#%@@@@@@==*%@@@@@@@@@@@@@@@@@@@@%*==%@@@@@%#**#%@@@                     
                       @@@@%#**#@@@@@#=*#@@@@@@@@@@@@@@@@@@#*=*@@@@@#**#%@@@@                       
                          @@@@%#**#%@@@+=*%@@@@@@@@@@@@@@%*++@@@%#**#%@@@@                          
                             @@@@@%####%%+*#%@@@@@@@@@@@#*=%@%###%@@@@@                             
                                 @@@@@@%###**#@@@@@@@@#**###%@@@@@@                                 
                                      @@@@@@%%#%@@@@%##%@@@@@@                                      
                                           @@@@@@@@@@@@@@                                           
                                                                                                    
                                                                                                    


    Type 'help' to see list of available commands.
`,
};
