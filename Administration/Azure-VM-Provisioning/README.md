# Provision New Azure VMs with Powershell


## Overview
- Goal: For Each Power Platform Environment, generate automations to Plan, Build, and Deploy new Azure VMs and associated resources.

#BluePrism: 

### Prerequisites
<p>Components and minimum 
<a href="https://bpdocs.blueprism.com/bp-7-1/en-us/install-minimum-requirements.htm?tocpath=Installation%7CInstall%20Blue%20Prism%20Enterprise%20Edition%7C_____2"> Requirements</a></p>

- Basic Requirements
<img src="https://bpdocs.blueprism.com/bp-7-1/en-us/Resources/Images/img-installing-enterprise-edition/typical-install-overview.png">




---
#### Phase 1: Plan (Resource: <a href="https://bpdocs.blueprism.com/bp-7-1/en-us/installation/bp-enterprise/preparation.htm" >Here</a>)

#### Phase 2: Build (Resource: <a href="https://bpdocs.blueprism.com/bp-7-1/en-us/installation/bp-enterprise/installation.htm" >Here</a>)

## Azure Deployment Patterns
<img src="https://bpdocs.blueprism.com/en-us/Resources/Images/
img-architecture/azure-deployment-pattern-network.png">


### Architecture Diagram
- Standard Blue Prism Enterprise architecture
<img src="https://bpdocs.blueprism.com/bp-7-1/en-us/Resources/Images/img-infrastructure-reference/img01-architecture-overview_thumb_0_128.png">
- Blue Prism Enterprise with Hub Control Room architecture
<img src="https://bpdocs.blueprism.com/bp-7-1/en-us/Resources/Images/img-infrastructure-reference/img02-architecture-overview_thumb_0_128.png">


## Resources
- [Architecture considerations](https://bpdocs.blueprism.com/bp-7-1/en-us/Guides/infrastructure-reference/architecture-considerations.htm?tocpath=Guides%7CInfrastructure%20Reference%20Architecture%7CComponent%20architecture%20examples%7C_____1)
- [Guides](https://bpdocs.blueprism.com/bp-7-1/en-us/guides.htm?tocpath=Guides%7C_____0)
<div role="main" id="mc-main-content">
                                                    <h1 id="Guides" data-magellan-target="Guides">Guides</h1>
                                                    <p>The following guides contain conceptual information and  instructions about how to install, configure, and use Blue Prism. </p>
                                                    <p>The table provides links to the current versions, all previous versions, and to the equivalent online guidance where appropriate. The guides are listed in alphabetical order but will also appear in results when searching the help system. You can also search this page by pressing <b>CTRL</b>+<b>F</b> and entering a keyword.</p>
                                                    <p>Documents are valid for the version specified and subsequent versions up to the next iteration of the document. For example, the initial version of the Active Directory Integration guide released with version 6.0 of Blue Prism. This version is valid for all versions up to 6.8 when the guide was updated for that release and is valid for all subsequent releases as this is the latest version of that document. </p>
                                                    <h2 id="BluePrismEnterpriseandNHSeditions" data-magellan-target="BluePrismEnterpriseandNHSeditions">Blue Prism Enterprise and NHS editions</h2>
                                                    <table style="margin-left: 0;margin-right: auto;mc-table-style: url('Resources/TableStyles/bp-table-column-header.css');" class="TableStyle-bp-table-column-header" cellspacing="0">
                                                        <colgroup><col class="TableStyle-bp-table-column-header-Column-Column1" style="width: 400px;">
                                                        <col class="TableStyle-bp-table-column-header-Column-Column2">
                                                        <col class="TableStyle-bp-table-column-header-Column-Column2">
                                                        </colgroup><thead>
                                                            <tr class="TableStyle-bp-table-column-header-Head-Header1">
                                                                <th style="padding-left: 8px;padding-right: 8px;padding-top: 3px;padding-bottom: 1px;border-bottom-style: solid;border-bottom-width: 1px;border-bottom-color: #dcdcdc;" class="TableStyle-bp-table-column-header-HeadE-Column1-Header1" scope="col">
                                                                    <p>Guide</p>
                                                                </th>
                                                                <th style="padding-left: 8px;padding-right: 8px;padding-top: 3px;padding-bottom: 1px;border-bottom-style: solid;border-bottom-width: 1px;border-bottom-color: #dcdcdc;text-align: center;" class="TableStyle-bp-table-column-header-HeadF-Column2-Header1" scope="col">
                                                                    <p>Latest PDF</p>
                                                                </th>
                                                                <th style="padding-left: 8px;padding-right: 8px;padding-top: 3px;padding-bottom: 1px;border-bottom-style: solid;border-bottom-width: 1px;border-bottom-color: #dcdcdc;text-align: center;" class="TableStyle-bp-table-column-header-HeadD-Column2-Header1" scope="col">
                                                                    <p>Previous PDF versions</p>
                                                                </th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr class="TableStyle-bp-table-column-header-Body-Body1">
                                                                <td class="TableStyle-bp-table-column-header-BodyE-Column1-Body1">
                                                                    <p>Active Directory Integration Data Sheet</p>
                                                                </td>
                                                                <td style="text-align: center;" class="TableStyle-bp-table-column-header-BodyF-Column2-Body1">
                                                                    <p><a href="https://bpdocs.blueprism.com/z-pdf/bpe/ad-integration/en-us/blue-prism-7-1-active-directory-integration.pdf" target="_blank" title="Open the Active Directory Integration Guide for Blue Prism 7.1" alt="Active Directory Integration Guide for Blue Prism 7.1">7.1</a>
                                                                    </p>
                                                                </td>
                                                                <td style="text-align: center;" class="TableStyle-bp-table-column-header-BodyD-Column2-Body1">
                                                                    <p><a href="https://bpdocs.blueprism.com/z-pdf/bpe/ad-integration/en-us/blue-prism-7-0-active-directory-integration.pdf" target="_blank" title="Open the Active Directory Integration Guide for Blue Prism 7.0" alt="Active Directory Integration Guide for Blue Prism 7.0">7.0</a> | <a href="https://bpdocs.blueprism.com/z-pdf/bpe/ad-integration/en-us/blue-prism-6-10-active-directory-integration.pdf" title="Open the Active Directory Integration Guide for Blue Prism 6.10" alt="Active Directory Integration Guide for Blue Prism 6.10" target="_blank">6.10</a> | <a href="https://bpdocs.blueprism.com/z-pdf/bpe/ad-integration/en-us/blue-prism-6-8-active-directory-integration.pdf" title="Open the Active Directory Integration Guide for Blue Prism 6.8" alt="Active Directory Integration Guide for Blue Prism 6.8" target="_blank">6.8</a> | <a href="https://bpdocs.blueprism.com/z-pdf/bpe/ad-integration/en-us/blue-prism-6-active-directory-integration.pdf" target="_blank" title="Open the Active Directory Integration Guide for Blue Prism 6.0" alt="Active Directory Integration Guide for Blue Prism 6.0">6.0</a> | <a href="https://bpdocs.blueprism.com/z-pdf/bpe/ad-integration/en-us/blue-prism-5-active-directory-integration.pdf" target="_blank" title="Open the Active Directory Integration Guide for Blue Prism 5.0" alt="Active Directory Integration Guide for Blue Prism 5.0">5.0</a> | <a href="https://bpdocs.blueprism.com/z-pdf/bpe/ad-integration/en-us/blue-prism-4-2-active-directory-integration.pdf" target="_blank" title="Open the Active Directory Integration Guide for Blue Prism 4.2" alt="Active Directory Integration Guide for Blue Prism 4.2">4.2</a></p>
                                                                </td>
                                                            </tr>
                                                            <tr class="TableStyle-bp-table-column-header-Body-Body1">
                                                                <td class="TableStyle-bp-table-column-header-BodyE-Column1-Body1">
                                                                    <p>Application Server Controlled Robots (ASCR)</p>
                                                                </td>
                                                                <td style="text-align: center;" class="TableStyle-bp-table-column-header-BodyF-Column2-Body1">
                                                                    <p><a href="https://bpdocs.blueprism.com/z-pdf/bpe/ascr/en-us/blue-prism-7-1-application-server-controlled-resources.pdf" target="_blank" title="Open the Application Server Controlled Robots guide for Blue Prism 7.1" alt="Application Server Controlled Robots guide for Blue Prism 7.1">7.1</a>
                                                                    </p>
                                                                </td>
                                                                <td style="text-align: center;" class="TableStyle-bp-table-column-header-BodyD-Column2-Body1">
                                                                    <p><a href="https://bpdocs.blueprism.com/z-pdf/bpe/ascr/en-us/blue-prism-7-0-application-server-controlled-resources.pdf" target="_blank" title="Open the Application Server Controlled Robots guide for Blue Prism 7.0" alt="Application Server Controlled Robots guide for Blue Prism 7.0">7.0</a>
                                                                    </p>
                                                                </td>
                                                            </tr>
                                                            <tr class="TableStyle-bp-table-column-header-Body-Body1">
                                                                <td class="TableStyle-bp-table-column-header-BodyE-Column1-Body1">
                                                                    <p>Audit Actions and Events</p>
                                                                </td>
                                                                <td style="text-align: center;" class="TableStyle-bp-table-column-header-BodyF-Column2-Body1">
                                                                    <p><a href="https://bpdocs.blueprism.com/z-pdf/bpe/audit/en-us/blue-prism-7-1-audit-actions-and-events.pdf" target="_blank" title="Blue Prism 7.1 - Audit Actions and Events PDF" alt="Blue Prism 7.1 - Audit Actions and Events PDF">7.1</a>
                                                                    </p>
                                                                </td>
                                                                <td style="text-align: center;" class="TableStyle-bp-table-column-header-BodyD-Column2-Body1">
                                                                    <p><a href="https://bpdocs.blueprism.com/z-pdf/bpe/audit/en-us/blue-prism-6-7-audit-actions-and-events.pdf" target="_blank" title="Blue Prism 6.7 - Audit Actions and Events PDF" alt="Blue Prism 6.7 - Audit Actions and Events PDF">6.7</a>
                                                                    </p>
                                                                </td>
                                                            </tr>
                                                            <tr class="TableStyle-bp-table-column-header-Body-Body1">
                                                                <td class="TableStyle-bp-table-column-header-BodyE-Column1-Body1">
                                                                    <p>Authentication Gateway Install and Configure Guide</p>
                                                                </td>
                                                                <td style="text-align: center;" class="TableStyle-bp-table-column-header-BodyF-Column2-Body1">
                                                                    <p><a href="https://bpdocs.blueprism.com/z-pdf/bpe/authentication/en-us/blue-prism-6-10-authentication-gateway-install-and-configure-guide.pdf" target="_blank" title="Open the Authentication Gateway Install and Configure Guide for Blue Prism 6.10" alt="Authentication Gateway Install and Configure Guide for Blue Prism 6.10">6.10</a>
                                                                    </p>
                                                                </td>
                                                                <td style="text-align: center;" class="TableStyle-bp-table-column-header-BodyD-Column2-Body1">
                                                                    <p>–</p>
                                                                </td>
                                                            </tr>
                                                            <tr class="TableStyle-bp-table-column-header-Body-Body1">
                                                                <td class="TableStyle-bp-table-column-header-BodyE-Column1-Body1">
                                                                    <p>Authentication Server Configuration Guide</p>
                                                                </td>
                                                                <td style="text-align: center;" class="TableStyle-bp-table-column-header-BodyF-Column2-Body1">
                                                                    <p><a href="https://bpdocs.blueprism.com/z-pdf/bpe/authentication/en-us/blue-prism-7-1-authentication-server-configuration-guide.pdf" target="_blank" title="Open the Authentication Server Configuration Guide for Blue Prism 7.1" alt="Authentication Server Configuration Guide for Blue Prism 7.1">7.1</a>
                                                                    </p>
                                                                </td>
                                                                <td style="text-align: center;" class="TableStyle-bp-table-column-header-BodyD-Column2-Body1">
                                                                    <p><a href="https://bpdocs.blueprism.com/z-pdf/bpe/authentication/en-us/blue-prism-7-0-authentication-server-configuration-guide.pdf" target="_blank" title="Open the Authentication Server Configuration Guide for Blue Prism 7.0" alt="Authentication Server Configuration Guide for Blue Prism 7.0">7.0</a>
                                                                    </p>
                                                                </td>
                                                            </tr>
                                                            <tr class="TableStyle-bp-table-column-header-Body-Body1">
                                                                <td class="TableStyle-bp-table-column-header-BodyE-Column1-Body1">
                                                                    <p>AWS Reference Architecture Reference Guide</p>
                                                                </td>
                                                                <td style="text-align: center;" class="TableStyle-bp-table-column-header-BodyF-Column2-Body1">
                                                                    <p><a href="https://bpdocs.blueprism.com/z-pdf/bpe/reference-architecture/aws/en-us/blue-prism-6-aws-reference-architecture.pdf" target="_blank" title="Open the Blue Prism 6 - AWS Reference Architecture PDF" alt="Blue Prism 6 - AWS Reference Architecture PDF">6.0</a>
                                                                    </p>
                                                                </td>
                                                                <td style="text-align: center;" class="TableStyle-bp-table-column-header-BodyD-Column2-Body1">
                                                                    <p><a href="https://bpdocs.blueprism.com/z-pdf/bpe/reference-architecture/aws/en-us/blue-prism-5-aws-reference-architecture.pdf" target="_blank" title="Open the Blue Prism 5 - AWS Reference Architecture  PDF" alt="Blue Prism 5 - AWS Reference Architecture  PDF">5.0</a>
                                                                    </p>
                                                                </td>
                                                            </tr>
                                                            <tr class="TableStyle-bp-table-column-header-Body-Body1">
                                                                <td class="TableStyle-bp-table-column-header-BodyE-Column1-Body1">
                                                                    <p>Azure Reference Architecture Reference Guide</p>
                                                                </td>
                                                                <td style="text-align: center;" class="TableStyle-bp-table-column-header-BodyF-Column2-Body1">
                                                                    <p><a href="https://bpdocs.blueprism.com/z-pdf/bpe/reference-architecture/azure/en-us/blue-prism-6-azure-reference-architecture.pdf" target="_blank" title="Open the Blue Prism 6 - Azure Reference Architecture PDF" alt="Blue Prism 6 - Azure Reference Architecture PDF">6.0</a>
                                                                    </p>
                                                                </td>
                                                                <td style="text-align: center;" class="TableStyle-bp-table-column-header-BodyD-Column2-Body1">
                                                                    <p><a href="https://bpdocs.blueprism.com/z-pdf/bpe/reference-architecture/azure/en-us/blue-prism-5-azure-reference-architecture.pdf" target="_blank" title="Open the Blue Prism 5 - Azure Reference Architecture PDF" alt="Blue Prism 5 - Azure Reference Architecture">5.0</a>
                                                                    </p>
                                                                </td>
                                                            </tr>
                                                            <tr class="TableStyle-bp-table-column-header-Body-Body1">
                                                                <td class="TableStyle-bp-table-column-header-BodyE-Column1-Body1">
                                                                    <p>Blue Prism API Install Guide</p>
                                                                </td>
                                                                <td style="text-align: center;" class="TableStyle-bp-table-column-header-BodyF-Column2-Body1">
                                                                    <p><a href="https://bpdocs.blueprism.com/z-pdf/bpe/bp-api/en-us/blue-prism-7-1-blue-prism-api-install-guide.pdf" target="_blank" title="Open the Blue Prism 7.1 - Blue Prism API Install Guide PDF" alt="Blue Prism 7.1 - Blue Prism API Install Guide PDF">7.1</a>
                                                                    </p>
                                                                </td>
                                                                <td style="text-align: center;" class="TableStyle-bp-table-column-header-BodyD-Column2-Body1">
                                                                    <p><a href="https://bpdocs.blueprism.com/z-pdf/bpe/bp-api/en-us/blue-prism-7-0-blue-prism-api-install-guide.pdf" target="_blank" title="Open the Blue Prism 7.0 - Blue Prism API Install Guide PDF" alt="Blue Prism 7.0 - Blue Prism API Install Guide PDF">7.0</a>
                                                                    </p>
                                                                </td>
                                                            </tr>
                                                            <tr class="TableStyle-bp-table-column-header-Body-Body1">
                                                                <td class="TableStyle-bp-table-column-header-BodyE-Column1-Body1">
                                                                    <p>Blue Prism Enterprise Edition Installation Guide</p>
                                                                </td>
                                                                <td style="text-align: center;" class="TableStyle-bp-table-column-header-BodyF-Column2-Body1">
                                                                    <p><a href="https://bpdocs.blueprism.com/z-pdf/bpe/install/en-us/blue-prism-7-1-installing-enterprise-edition.pdf" target="_blank" title="Open the Blue Prism 7.1 - Installation Guide PDF" alt="Blue Prism 7.1 - Installation Guide PDF">7.1</a>
                                                                    </p>
                                                                </td>
                                                                <td style="text-align: center;" class="TableStyle-bp-table-column-header-BodyD-Column2-Body1">
                                                                    <p><a href="https://bpdocs.blueprism.com/z-pdf/bpe/install/en-us/blue-prism-7-0-installing-enterprise-edition.pdf" target="_blank" title="Open the Blue Prism 7.0 - Installation Guide PDF" alt="Blue Prism 7.0 - Installation Guide PDF">7.0</a> | <a href="https://bpdocs.blueprism.com/z-pdf/bpe/install/en-us/blue-prism-6-10-installing-enterprise-edition.pdf" target="_blank" title="Open the Blue Prism 6.10 - Installation Guide PDF" alt="Blue Prism 6.10 - Installation Guide PDF">6.10</a> | <a href="https://bpdocs.blueprism.com/z-pdf/bpe/install/en-us/blue-prism-6-9-installing-enterprise-edition.pdf" target="_blank" title="Open the Blue Prism 6.9 - Enterprise Edition Installation Guide PDF" alt="Blue Prism 6.9 - Enterprise Edition Installation Guide PDF">6.9</a> | <a href="https://bpdocs.blueprism.com/z-pdf/bpe/install/en-us/blue-prism-6-8-installing-enterprise-edition.pdf" target="_blank" title="Open the Blue Prism 6.8 - Enterprise Edition Installation Guide PDF" alt="Blue Prism 6.8 - Enterprise Edition Installation Guide PDF">6.8</a> | <a href="https://bpdocs.blueprism.com/z-pdf/bpe/install/en-us/blue-prism-6-7-installing-enterprise-edition.pdf" target="_blank" title="Open the Blue Prism 6.7 - Enterprise Edition Installation Guide PDF" alt="Blue Prism 6.7 - Enterprise Edition Installation Guide PDF">6.7</a> | <a href="https://bpdocs.blueprism.com/z-pdf/bpe/install/en-us/blue-prism-6-6-installing-enterprise-edition.pdf" target="_blank" title="Open the Blue Prism 6.6 - Enterprise Edition Installation Guide PDF" alt="Blue Prism 6.6 - Enterprise Edition Installation Guide PDF">6.6</a> | <a href="https://bpdocs.blueprism.com/z-pdf/bpe/install/en-us/blue-prism-6-5-installing-enterprise-edition.pdf" target="_blank" title="Open the Blue Prism 6.5 - Enterprise Edition Installation Guide PDF" alt="Blue Prism 6.5 - Enterprise Edition Installation Guide PDF">6.5</a> | <a href="https://bpdocs.blueprism.com/z-pdf/bpe/install/en-us/blue-prism-6-4-installing-enterprise-edition.pdf" target="_blank" title="Open the Blue Prism 6.4 - Enterprise Edition Installation Guide PDF" alt="Blue Prism 6.4 - Enterprise Edition Installation Guide PDF">6.4</a> | <a href="https://bpdocs.blueprism.com/z-pdf/bpe/install/en-us/blue-prism-6-3-installing-enterprise-edition.pdf" target="_blank" title="Open the Blue Prism 6.3 - Enterprise Edition Installation Guide PDF" alt="Blue Prism 6.3 - Enterprise Edition Installation Guide PDF">6.3</a> | <a href="https://bpdocs.blueprism.com/z-pdf/bpe/install/en-us/blue-prism-6-installing-enterprise-edition.pdf" target="_blank" title="Open the Blue Prism 6.0 - Enterprise Edition Installation Guide PDF" alt="Blue Prism 6.0 - Enterprise Edition Installation Guide PDF">6.0</a></p>
                                                                </td>
                                                            </tr>
                                                            <tr class="TableStyle-bp-table-column-header-Body-Body1">
                                                                <td class="TableStyle-bp-table-column-header-BodyE-Column1-Body1">
                                                                    <p>Blue Prism Network Connectivity  Data Sheet</p>
                                                                </td>
                                                                <td style="text-align: center;" class="TableStyle-bp-table-column-header-BodyF-Column2-Body1">
                                                                    <p><a href="https://bpdocs.blueprism.com/z-pdf/bpe/network-connectivity/en-us/blue-prism-7-0-network-connectivity.pdf" target="_blank" alt="Blue Prism 7.0 - Network Connectivity PDF" title="Opent the Blue Prism 7.0 - Network Connectivity PDF">7.0</a>
                                                                    </p>
                                                                </td>
                                                                <td style="text-align: center;" class="TableStyle-bp-table-column-header-BodyD-Column2-Body1">
                                                                    <p><a href="https://bpdocs.blueprism.com/z-pdf/bpe/network-connectivity/en-us/blue-prism-6-10-network-connectivity.pdf" target="_blank" title="Opent the Blue Prism 6.10 - Network Connectivity PDF" alt="Blue Prism 6.10 - Network Connectivity PDF">6.10</a> | <a href="https://bpdocs.blueprism.com/z-pdf/bpe/network-connectivity/en-us/blue-prism-6-5-network-connectivity.pdf" target="_blank" title="Opent the Blue Prism 6.5 - Network Connectivity PDF" alt="Blue Prism 6.5 - Network Connectivity PDF">6.5</a></p>
                                                                </td>
                                                            </tr>
                                                            <tr class="TableStyle-bp-table-column-header-Body-Body1">
                                                                <td class="TableStyle-bp-table-column-header-BodyE-Column1-Body1">
                                                                    <p>Cloud Deployments  Data Sheet</p>
                                                                </td>
                                                                <td style="text-align: center;" class="TableStyle-bp-table-column-header-BodyF-Column2-Body1">
                                                                    <p><a href="https://bpdocs.blueprism.com/z-pdf/bpe/cloud-deployments/en-us/blue-prism-7-0-cloud-deployments.pdf" target="_blank" title="Open the Blue Prism 7.0 - Cloud Deployments PDF" alt=" Blue Prism 7.0 - Cloud Deployments PDF">7.0</a>
                                                                    </p>
                                                                </td>
                                                                <td style="text-align: center;" class="TableStyle-bp-table-column-header-BodyD-Column2-Body1">
                                                                    <p><a href="https://bpdocs.blueprism.com/z-pdf/bpe/cloud-deployments/en-us/blue-prism-6-cloud-deployments.pdf" target="_blank" title="Open the Blue Prism 6 - Cloud Deployments PDF" alt=" Blue Prism 6 - Cloud Deployments PDF">6.0</a> | <a href="https://bpdocs.blueprism.com/z-pdf/bpe/cloud-deployments/en-us/blue-prism-5-cloud-deployments.pdf" target="_blank" title="Open the Blue Prism 5 - Cloud Deployments PDF" alt="Blue Prism 5 - Cloud Deployments">5.0</a></p>
                                                                </td>
                                                            </tr>
                                                            <tr class="TableStyle-bp-table-column-header-Body-Body1">
                                                                <td class="TableStyle-bp-table-column-header-BodyE-Column1-Body1">
                                                                    <p>Chrome, Edge, and Firefox Integration Data Sheet</p>
                                                                </td>
                                                                <td style="text-align: center;" class="TableStyle-bp-table-column-header-BodyF-Column2-Body1">
                                                                    <p><a href="https://bpdocs.blueprism.com/z-pdf/bpe/browser-extensions/en-us/blue-prism-7-1-chrome-edge-and-firefox-integration.pdf" target="_blank" title="Open the Blue Prism 7.1 - Chrome, Edge, and Firefox Integration PDF" alt="Blue Prism 7.1 - Chrome, Edge, and Firefox Integration PDF">7.1</a>
                                                                    </p>
                                                                </td>
                                                                <td style="text-align: center;" class="TableStyle-bp-table-column-header-BodyD-Column2-Body1">
                                                                    <p><a href="https://bpdocs.blueprism.com/z-pdf/bpe/browser-extensions/en-us/blue-prism-7-0-chrome-edge-and-firefox-integration.pdf" target="_blank" title="Open the Blue Prism 7.0 - Chrome, Edge, and Firefox Integration PDF" alt="Blue Prism 7.0 - Chrome, Edge, and Firefox Integration PDF">7.0</a> |&nbsp;<a href="https://bpdocs.blueprism.com/z-pdf/bpe/browser-extensions/en-us/blue-prism-6-10-chrome-edge-and-firefox-integration.pdf" target="_blank" title="Open the Blue Prism 6.10 - Chrome, Edge, and Firefox Integration PDF" alt="Blue Prism 6.10 - Chrome, Edge, and Firefox Integration PDF">6.10</a> | <a href="https://bpdocs.blueprism.com/z-pdf/bpe/browser-extensions/en-us/blue-prism-6-9-chrome-edge-and-firefox-integration.pdf" target="_blank" title="Open the Blue Prism 6.9 - Chrome, Edge, and Firefox Integration PDF" alt="Blue Prism 6.9 - Chrome, Edge, and Firefox Integration PDF">6.9 </a>| <a href="https://bpdocs.blueprism.com/z-pdf/bpe/browser-extensions/en-us/blue-prism-6-8-chrome-edge-and-firefox-integration.pdf" target="_blank" title="Open the Blue Prism 6.8 - Chrome, Edge, and Firefox Integration PDF" alt="Blue Prism 6.8 - Chrome, Edge, and Firefox Integration PDF">6.8</a> | <a href="https://bpdocs.blueprism.com/z-pdf/bpe/browser-extensions/en-us/blue-prism-6-5-chrome-and-firefox-integration.pdf" target="_blank" title="Open the Blue Prism 6.5 - Chrome and Firefox Integration PDF" alt="Blue Prism 6.5 - Chrome and Firefox Integration PDF">6.5</a> | <a href="https://bpdocs.blueprism.com/z-pdf/bpe/browser-extensions/en-us/blue-prism-6-4-chrome-and-firefox-integration.pdf" target="_blank" title="Open the Blue Prism 6.4 - Chrome and Firefox Integration PDF" alt="Blue Prism 6.4 - Chrome and Firefox Integration PDF">6.4</a> | <a href="https://bpdocs.blueprism.com/z-pdf/bpe/browser-extensions/en-us/blue-prism-6-3-chrome-extension.pdf" target="_blank" title="Open the Blue Prism 6.3 - Chrome Extension PDF" alt="Blue Prism 6.3 - Chrome Extension PDF">6.3</a></p>
                                                                </td>
                                                            </tr>
                                                            <tr class="TableStyle-bp-table-column-header-Body-Body1">
                                                                <td class="TableStyle-bp-table-column-header-BodyE-Column1-Body1">
                                                                    <p>Credential Manager  Data Sheet</p>
                                                                </td>
                                                                <td style="text-align: center;" class="TableStyle-bp-table-column-header-BodyF-Column2-Body1">
                                                                    <p><a href="https://bpdocs.blueprism.com/z-pdf/bpe/credential-manager/en-us/blue-prism-7-0-credential-manager.pdf" target="_blank" title="Open the Blue Prism 7.0 - Credential Manager PDF" alt="Blue Prism 7.0 - Credential Manager">7.0</a>
                                                                    </p>
                                                                </td>
                                                                <td style="text-align: center;" class="TableStyle-bp-table-column-header-BodyD-Column2-Body1">
                                                                    <p><a href="https://bpdocs.blueprism.com/z-pdf/bpe/credential-manager/en-us/blue-prism-6-10-credential-manager.pdf" target="_blank" title="Open the Blue Prism 6.10 - Credential Manager PDF" alt="Blue Prism 6.10 - Credential Manager">6.10</a> | <a href="https://bpdocs.blueprism.com/z-pdf/bpe/credential-manager/en-us/blue-prism-6-7-credential-manager.pdf" target="_blank" title="Open the Blue Prism 6.7 - Credential Manager PDF" alt=" Blue Prism 6.7 - Credential Manager PDF">6.7</a> | <a href="https://bpdocs.blueprism.com/z-pdf/bpe/credential-manager/en-us/blue-prism-6-3-credential-manager.pdf" target="_blank" title="Open theBlue Prism 6.3 - Credential Manager PDF" alt="Blue Prism 6.3 - Credential Manager">6.3</a> | <a href="https://bpdocs.blueprism.com/z-pdf/bpe/credential-manager/en-us/blue-prism-6-credential-manager.pdf" target="_blank" title="Open the Blue Prism 6 - Credential Manager" alt="Blue Prism 6 - Credential Manager">6.0</a></p>
                                                                </td>
                                                            </tr>
                                                            <tr class="TableStyle-bp-table-column-header-Body-Body1">
                                                                <td class="TableStyle-bp-table-column-header-BodyE-Column1-Body1">
                                                                    <p>Dashboards and Tiles User Guide</p>
                                                                </td>
                                                                <td style="text-align: center;" class="TableStyle-bp-table-column-header-BodyF-Column2-Body1">
                                                                    <p><a href="https://bpdocs.blueprism.com/z-pdf/bpe/dashboards-tiles/en-us/blue-prism-7-0-dashboards-and-tiles.pdf" target="_blank" title="Open the Blue Prism 7.0 - Dashboards and Tiles User Guide PDF" alt="Blue Prism 7.0 - Dashboards and Tiles User Guide PDF">7.0</a>
                                                                    </p>
                                                                </td>
                                                                <td style="text-align: center;" class="TableStyle-bp-table-column-header-BodyD-Column2-Body1">
                                                                    <p><a href="https://bpdocs.blueprism.com/z-pdf/bpe/dashboards-tiles/en-us/blue-prism-6-10-dashboards-and-tiles.pdf" target="_blank" title="Open the Blue Prism 6.10 - Dashboards and Tiles User Guide PDF" alt="Blue Prism 6.10 - Dashboards and Tiles User Guide PDF">6.10</a>
                                                                    </p>
                                                                </td>
                                                            </tr>
                                                            <tr class="TableStyle-bp-table-column-header-Body-Body1">
                                                                <td class="TableStyle-bp-table-column-header-BodyE-Column1-Body1">
                                                                    <p>Data Gateways User Guide</p>
                                                                </td>
                                                                <td style="text-align: center;" class="TableStyle-bp-table-column-header-BodyF-Column2-Body1">
                                                                    <p><a href="https://bpdocs.blueprism.com/z-pdf/bpe/data-gateways/en-us/blue-prism-7-1-data-gateways.pdf" target="_blank" title="Open the Blue Prism 7.1 - Data Gateways User Guide PDF" alt="Blue Prism 7.1 - Data Gateways User Guide PDF">7.1</a>
                                                                    </p>
                                                                </td>
                                                                <td style="text-align: center;" class="TableStyle-bp-table-column-header-BodyD-Column2-Body1">
                                                                    <p><a href="https://bpdocs.blueprism.com/z-pdf/bpe/data-gateways/en-us/blue-prism-7-0-data-gateways.pdf" target="_blank" title="Open the Blue Prism 7.0 - Data Gateways User Guide PDF" alt="Blue Prism 7.0 - Data Gateways User Guide PDF">7.0</a> | <a href="https://bpdocs.blueprism.com/z-pdf/bpe/data-gateways/en-us/blue-prism-6-10-data-gateways.pdf" target="_blank" title="Open the Blue Prism 6.10 - Data Gateways User Guide PDF" alt="Blue Prism 6.10 - Data Gateways User Guide PDF">6.10</a> | <a href="https://bpdocs.blueprism.com/z-pdf/bpe/data-gateways/en-us/blue-prism-6-8-data-gateways.pdf" target="_blank" title="Open the Blue Prism 6.8 - Data Gateways User Guide PDF" alt="Blue Prism 6.8 - Data Gateways User Guide PDF">6.8</a> | <a href="https://bpdocs.blueprism.com/z-pdf/bpe/data-gateways/en-us/blue-prism-6-7-data-gateways.pdf" target="_blank" title="Open the Blue Prism 6.7 - Data Gateways User Guide PDF" alt="Blue Prism 6.7 - Data Gateways User Guide PDF">6.7</a> | <a href="https://bpdocs.blueprism.com/z-pdf/bpe/data-gateways/en-us/blue-prism-6-6-data-gateways.pdf" target="_blank" title="Open the Blue Prism 6.6 - Data Gateways User Guide PDF" alt="Blue Prism 6.6 - Data Gateways User Guide PDF">6.6</a> | <a href="https://bpdocs.blueprism.com/z-pdf/bpe/data-gateways/en-us/blue-prism-6-5-data-gateways.pdf" target="_blank" title="Open the Blue Prism 6.5 - Data Gateways User Guide PDF" alt="Blue Prism 6.5 - Data Gateways User Guide PDF">6.5</a></p>
                                                                </td>
                                                            </tr>
                                                            <tr class="TableStyle-bp-table-column-header-Body-Body1">
                                                                <td class="TableStyle-bp-table-column-header-BodyE-Column1-Body1">
                                                                    <p>Date and Time Handling Data Sheet</p>
                                                                </td>
                                                                <td style="text-align: center;" class="TableStyle-bp-table-column-header-BodyF-Column2-Body1">
                                                                    <p><a href="https://bpdocs.blueprism.com/z-pdf/bpe/date-and-time-handling/en-us/blue-prism-6-date-and-time-handling.pdf" target="_blank" title="Open the Blue Prism 6 - Date and Time Handling PDF" alt="Blue Prism 6 - Date and Time Handling PDF">6.0</a>
                                                                    </p>
                                                                </td>
                                                                <td style="text-align: center;" class="TableStyle-bp-table-column-header-BodyD-Column2-Body1">
                                                                    <p>–</p>
                                                                </td>
                                                            </tr>
                                                            <tr class="TableStyle-bp-table-column-header-Body-Body1">
                                                                <td class="TableStyle-bp-table-column-header-BodyE-Column1-Body1">
                                                                    <p>Getting Started with Blue Prism Trail and Learning Editions</p>
                                                                </td>
                                                                <td style="text-align: center;" class="TableStyle-bp-table-column-header-BodyF-Column2-Body1">
                                                                    <p><a href="https://bpdocs.blueprism.com/z-pdf/bpe/trial-learning/en-us/blue-prism-trial-and-blue-prism-learning-edition-getting-started.pdf" target="_blank" title="Open the Blue Prism Trial and Blue Prism Learning Editions Getting Started PDF" alt="Blue Prism Trial and Blue Prism Learning Editions Getting Started PDF">All</a>
                                                                    </p>
                                                                </td>
                                                                <td style="text-align: center;" class="TableStyle-bp-table-column-header-BodyD-Column2-Body1">
                                                                    <p>N/A</p>
                                                                </td>
                                                            </tr>
                                                            <tr class="TableStyle-bp-table-column-header-Body-Body1">
                                                                <td class="TableStyle-bp-table-column-header-BodyE-Column1-Body1">
                                                                    <p>Google Cloud Platform Reference Architecture</p>
                                                                </td>
                                                                <td style="text-align: center;" class="TableStyle-bp-table-column-header-BodyF-Column2-Body1">
                                                                    <p><a href="https://bpdocs.blueprism.com/z-pdf/bpe/google-cloud/en-us/blue-prism-6-google-cloud-platform-reference-architecture.pdf" target="_blank" title="Open the Blue Prism 6 - Google Cloud Platform Reference Architecture PDF" alt="Blue Prism 6 - Google Cloud Platform Reference Architecture PDF">6.0</a>
                                                                    </p>
                                                                </td>
                                                                <td style="text-align: center;" class="TableStyle-bp-table-column-header-BodyD-Column2-Body1">
                                                                    <p>–</p>
                                                                </td>
                                                            </tr>
                                                            <tr class="TableStyle-bp-table-column-header-Body-Body1">
                                                                <td class="TableStyle-bp-table-column-header-BodyE-Column1-Body1">
                                                                    <p>Google Sheets VBO  Data Sheet</p>
                                                                </td>
                                                                <td style="text-align: center;" class="TableStyle-bp-table-column-header-BodyF-Column2-Body1">
                                                                    <p><a href="https://bpdocs.blueprism.com/z-pdf/bpe/google-sheets/en-us/blue-prism-7-0-google-sheets-vbo.pdf" target="_blank" title="Open the Blue Prism 7.0 - Google Sheets VBO PDF" alt="Blue Prism 7.0 - Google Sheets VBO PDF">7.0</a>
                                                                    </p>
                                                                </td>
                                                                <td style="text-align: center;" class="TableStyle-bp-table-column-header-BodyD-Column2-Body1">
                                                                    <p><a href="https://bpdocs.blueprism.com/z-pdf/bpe/google-sheets/en-us/blue-prism-6-10-google-sheets-vbo.pdf" target="_blank" title="Open the Blue Prism 6.10 - Google Sheets VBO PDF" alt="Blue Prism 6.10 - Google Sheets VBO PDF">6.10</a> | <a href="https://bpdocs.blueprism.com/z-pdf/bpe/google-sheets/en-us/blue-prism-6-8-google-sheets-vbo.pdf" target="_blank" title="Open the Blue Prism 6.8 - Google Sheets VBO PDF" alt="Blue Prism 6.8 - Google Sheets VBO PDF">6.8</a> | <a href="https://bpdocs.blueprism.com/z-pdf/bpe/google-sheets/en-us/blue-prism-6-5-google-sheets-vbo.pdf" target="_blank" title="Open the Blue Prism 6.5 - Google Sheets VBO PDF" alt="Blue Prism 6.5 - Google Sheets VBO PDF">6.5</a></p>
                                                                </td>
                                                            </tr>
                                                            <tr class="TableStyle-bp-table-column-header-Body-Body1">
                                                                <td class="TableStyle-bp-table-column-header-BodyE-Column1-Body1">
                                                                    <p>HIPAA&nbsp;Compliance  Data Sheet</p>
                                                                </td>
                                                                <td style="text-align: center;" class="TableStyle-bp-table-column-header-BodyF-Column2-Body1">
                                                                    <p><a href="https://bpdocs.blueprism.com/z-pdf/bpe/hipaa/en-us/blue-prism-6-hipaa-compliance.pdf" target="_blank" title="Open the Blue Prism 6 - HIPAA Compliance PDF" alt="Blue Prism 6 - HIPAA Compliance">6.0</a>
                                                                    </p>
                                                                </td>
                                                                <td style="text-align: center;" class="TableStyle-bp-table-column-header-BodyD-Column2-Body1">
                                                                    <p><a href="https://bpdocs.blueprism.com/z-pdf/bpe/hipaa/en-us/blue-prism-5-hipaa-compliance.pdf" target="_blank" title="Open the Blue Prism 5 - HIPAA Compliance PDF" alt="Blue Prism 5 - HIPAA Compliance PDF">5.0</a> | <a href="https://bpdocs.blueprism.com/z-pdf/bpe/hipaa/en-us/blue-prism-4-2-hipaa-compliance.pdf" target="_blank" title="Open the Blue Prism 4.2 - HIPAA Compliance PDF" alt="Blue Prism 4.2 - HIPAA Compliance PDF">4.2</a></p>
                                                                </td>
                                                            </tr>
                                                            <tr class="TableStyle-bp-table-column-header-Body-Body1">
                                                                <td class="TableStyle-bp-table-column-header-BodyE-Column1-Body1">
                                                                    <p>Infrastructure Overview Enterprise Edition</p>
                                                                </td>
                                                                <td style="text-align: center;" class="TableStyle-bp-table-column-header-BodyF-Column2-Body1">
                                                                    <p>Discontinued, see the latest <a href="https://bpdocs.blueprism.com/z-pdf/bpe/infrastructure/en-us/blue-prism-7-1-infrastructure-reference-guide.pdf" target="_blank" title="Blue Prism 7.1 - Infrastructure Reference Guide PDF" alt="Blue Prism 7.1 - Infrastructure Reference Guide PDF">Infrastructure Reference Guide</a></p>
                                                                </td>
                                                                <td style="text-align: center;" class="TableStyle-bp-table-column-header-BodyD-Column2-Body1">
                                                                    <p><a href="https://bpdocs.blueprism.com/z-pdf/infrastructure-overview/Blue Prism 6 - Infrastructure Overview Enterprise Edition.pdf" target="_blank" title="Open the Blue Prism 6 - Infrastructure Overview Enterprise Edition PDF" alt="Blue Prism 6 - Infrastructure Overview Enterprise Edition PDF"></a><a href="https://bpdocs.blueprism.com/z-pdf/bpe/infrastructure/en-us/blue-prism-6-3-infrastructure-overview-enterprise-edition.pdf" target="_blank" title="Open the Blue Prism 6.3 - Infrastructure Overview Enterprise Edition PDF" alt="Blue Prism 6.3 - Infrastructure Overview Enterprise Edition PDF">6.3</a> | <a href="https://bpdocs.blueprism.com/z-pdf/bpe/infrastructure/en-us/blue-prism-6-infrastructure-overview-enterprise-edition.pdf" target="_blank" title="Open the Blue Prism 6.3 - Infrastructure Overview Enterprise Edition PDF" alt="Blue Prism 6.3 - Infrastructure Overview Enterprise Edition PDF">6.0</a> | <a href="https://bpdocs.blueprism.com/z-pdf/bpe/infrastructure/en-us/blue-prism-5-infrastructure-overview-enterprise-edition.pdf" target="_blank" title="Open the Blue Prism 5 - Infrastructure Overview Enterprise Edition PDF" alt="Blue Prism 5 - Infrastructure Overview Enterprise Edition PDF">5.0</a> | <a href="https://bpdocs.blueprism.com/z-pdf/bpe/infrastructure/en-us/blue-prism-4-2-infrastructure-overview-enterprise-edition.pdf" target="_blank" title="Open the Blue Prism 4.2 - Infrastructure Overview Enterprise Edition PDF" alt="Blue Prism 4.2 - Infrastructure Overview Enterprise Edition PDF">4.2</a></p>
                                                                </td>
                                                            </tr>
                                                            <tr class="TableStyle-bp-table-column-header-Body-Body1">
                                                                <td class="TableStyle-bp-table-column-header-BodyE-Column1-Body1">
                                                                    <p>Infrastructure Overview NHS Edition</p>
                                                                </td>
                                                                <td style="text-align: center;" class="TableStyle-bp-table-column-header-BodyF-Column2-Body1">
                                                                    <p><a href="https://bpdocs.blueprism.com/z-pdf/bpe/infrastructure/en-us/blue-prism-6-7-infrastructure-overview-nhs-edition.pdf" target="_blank" title="Open the Blue Prism 6.7 - Infrastructure Overview NHS Edition PDF" alt="Blue Prism 6.7 - Infrastructure Overview NHS Edition PDF">6.7</a>
                                                                    </p>
                                                                </td>
                                                                <td style="text-align: center;" class="TableStyle-bp-table-column-header-BodyD-Column2-Body1">
                                                                    <p><a href="https://bpdocs.blueprism.com/z-pdf/bpe/infrastructure/en-us/blue-prism-6-3-infrastructure-overview-nhs-edition.pdf" target="_blank" title="Open the Blue Prism 6.3 - Infrastructure Overview NHS Edition PDF" alt="Blue Prism 6.3 - Infrastructure Overview NHS Edition PDF">6.3</a> | <a href="https://bpdocs.blueprism.com/z-pdf/bpe/infrastructure/en-us/blue-prism-6-infrastructure-overview-nhs-edition.pdf" target="_blank" title="Open the Blue Prism 6 - Infrastructure Overview NHS Edition PDF" alt="Blue Prism 6 - Infrastructure Overview NHS Edition PDF">6.0</a> | <a href="https://bpdocs.blueprism.com/z-pdf/bpe/infrastructure/en-us/blue-prism-5-infrastructure-overview-nhs-edition.pdf" target="_blank" title="Open the Blue Prism 5 - Infrastructure Overview NHS Edition PDF" alt="Blue Prism 5 - Infrastructure Overview NHS Edition PDF">5.0</a> | <a href="https://bpdocs.blueprism.com/z-pdf/bpe/infrastructure/en-us/blue-prism-4-2-infrastructure-overview-nhs-edition.pdf" target="_blank" title="Open the Blue Prism 4.2 - Infrastructure Overview NHS Edition PDF" alt="Blue Prism 4.2 - Infrastructure Overview NHS Edition PDF">4.2</a></p>
                                                                </td>
                                                            </tr>
                                                            <tr class="TableStyle-bp-table-column-header-Body-Body1">
                                                                <td class="TableStyle-bp-table-column-header-BodyE-Column1-Body1">
                                                                    <p>Infrastructure Reference Guide</p>
                                                                </td>
                                                                <td style="text-align: center;" class="TableStyle-bp-table-column-header-BodyF-Column2-Body1">
                                                                    <p><a href="https://bpdocs.blueprism.com/z-pdf/bpe/infrastructure/en-us/blue-prism-7-1-infrastructure-reference-guide.pdf" target="_blank" title="Blue Prism 7.1 Infrastructure Reference Guide PDF" alt="Blue Prism 7.1 Infrastructure Reference Guide PDF">7.1</a>
                                                                    </p>
                                                                </td>
                                                                <td style="text-align: center;" class="TableStyle-bp-table-column-header-BodyD-Column2-Body1">
                                                                    <p><a href="https://bpdocs.blueprism.com/z-pdf/bpe/infrastructure/en-us/blue-prism-6-7-infrastructure-reference-guide.pdf" target="_blank" title="Blue Prism 6.7 Infrastructure Reference Guide PDF" alt="Blue Prism 6.7 Infrastructure Reference Guide PDF">6.7</a>
                                                                    </p>
                                                                </td>
                                                            </tr>
                                                            <tr class="TableStyle-bp-table-column-header-Body-Body1">
                                                                <td class="TableStyle-bp-table-column-header-BodyE-Column1-Body1">
                                                                    <p>Intelligent Automation Skills  Data Sheet</p>
                                                                </td>
                                                                <td style="text-align: center;" class="TableStyle-bp-table-column-header-BodyF-Column2-Body1">
                                                                    <p><a href="https://bpdocs.blueprism.com/z-pdf/bpe/skills/en-us/blue-prism-7-0-intelligent-automation-skills.pdf" target="_blank" title="Open the Blue Prism 7.0 - Intelligent Automation Skills PDF" alt="Blue Prism 7.0 - Intelligent Automation Skills PDF">7.0</a>
                                                                    </p>
                                                                </td>
                                                                <td style="text-align: center;" class="TableStyle-bp-table-column-header-BodyD-Column2-Body1">
                                                                    <p><a href="https://bpdocs.blueprism.com/z-pdf/bpe/skills/en-us/blue-prism-6-4-intelligent-automation-skills.pdf" target="_blank" title="Open the Blue Prism 6.4 - Intelligent Automation Skills PDF" alt="Blue Prism 6.4 - Intelligent Automation Skills PDF">6.4</a>
                                                                    </p>
                                                                </td>
                                                            </tr>
                                                            <tr class="TableStyle-bp-table-column-header-Body-Body1">
                                                                <td class="TableStyle-bp-table-column-header-BodyE-Column1-Body1">
                                                                    <p>Intelligent Services User Guide – Google</p>
                                                                </td>
                                                                <td style="text-align: center;" class="TableStyle-bp-table-column-header-BodyF-Column2-Body1">
                                                                    <p><a href="https://bpdocs.blueprism.com/z-pdf/bpe/intelligent-services/google/en-us/blue-prism-6-2-google-intelligent-services-user-guide.pdf" target="_blank" title="Open the Blue Prism 6.2 - Google Intelligent Services User Guide PDF" alt="Blue Prism 6.2 - Google Intelligent Services User Guide PDF">6.2</a>
                                                                    </p>
                                                                </td>
                                                                <td style="text-align: center;" class="TableStyle-bp-table-column-header-BodyD-Column2-Body1">
                                                                    <p>–</p>
                                                                </td>
                                                            </tr>
                                                            <tr class="TableStyle-bp-table-column-header-Body-Body1">
                                                                <td class="TableStyle-bp-table-column-header-BodyE-Column1-Body1">
                                                                    <p>Intelligent Service User Guides – IBM&nbsp;Watson</p>
                                                                </td>
                                                                <td style="text-align: center;" class="TableStyle-bp-table-column-header-BodyF-Column2-Body1">
                                                                    <p><a href="https://bpdocs.blueprism.com/z-pdf/bpe/intelligent-services/ibm/en-us/blue-prism-6-2-ibm-watson-intelligent-services-user-guide.pdf" target="_blank" title="Open the Blue Prism 6.2 - IBM Watson Intelligent Services User Guide PDF" alt="Blue Prism 6.2 - IBM Watson Intelligent Services User Guide PDF">6.2</a>
                                                                    </p>
                                                                </td>
                                                                <td style="text-align: center;" class="TableStyle-bp-table-column-header-BodyD-Column2-Body1">
                                                                    <p>–</p>
                                                                </td>
                                                            </tr>
                                                            <tr class="TableStyle-bp-table-column-header-Body-Body1">
                                                                <td class="TableStyle-bp-table-column-header-BodyE-Column1-Body1">
                                                                    <p>Intelligent Services User Guide – Microsoft</p>
                                                                </td>
                                                                <td style="text-align: center;" class="TableStyle-bp-table-column-header-BodyF-Column2-Body1">
                                                                    <p><a href="https://bpdocs.blueprism.com/z-pdf/bpe/intelligent-services/microsoft/en-us/blue-prism-6-2-microsoft-intelligent-services.pdf" target="_blank" title="Open the Blue Prism 6.2 - Microsoft Intelligent Services User Guide PDF" alt="Blue Prism 6.2 - Microsoft Intelligent Services User Guide PDF">6.2</a>
                                                                    </p>
                                                                </td>
                                                                <td style="text-align: center;" class="TableStyle-bp-table-column-header-BodyD-Column2-Body1">
                                                                    <p>–</p>
                                                                </td>
                                                            </tr>
                                                            <tr class="TableStyle-bp-table-column-header-Body-Body1">
                                                                <td class="TableStyle-bp-table-column-header-BodyE-Column1-Body1">
                                                                    <p>Java Access Bridge (JAB) User Guide</p>
                                                                </td>
                                                                <td style="text-align: center;" class="TableStyle-bp-table-column-header-BodyF-Column2-Body1">
                                                                    <p><a href="https://bpdocs.blueprism.com/z-pdf/bpe/jab/en-us/blue-prism-7-0-java-access-bridge.pdf" target="_blank" title="Open the Blue Prism 7.0 - Java Access Bridge User Guide PDF" alt="Blue Prism 7.0 - Java Access Bridge User Guide PDF">7.0</a>
                                                                    </p>
                                                                </td>
                                                                <td style="text-align: center;" class="TableStyle-bp-table-column-header-BodyD-Column2-Body1">
                                                                    <p><a href="https://bpdocs.blueprism.com/z-pdf/bpe/jab/en-us/blue-prism-6-10-java-access-bridge.pdf" target="_blank" title="Open the Blue Prism 6.10 - Java Access Bridge User Guide PDF" alt="Blue Prism 6.10 - Java Access Bridge User Guide PDF">6.10</a> | <a href="https://bpdocs.blueprism.com/z-pdf/bpe/jab/en-us/blue-prism-6-java-access-bridge.pdf" target="_blank" title="Open the Blue Prism 6 - Java Access Bridge User Guide PDF" alt="Blue Prism 6 - Java Access Bridge User Guide PDF">6.0</a> | <a href="https://bpdocs.blueprism.com/z-pdf/bpe/jab/en-us/blue-prism-5-java-access-bridge.pdf" target="_blank" title="Open the Blue Prism 5 - Java Access Bridge User Guide PDF" alt="Blue Prism 5 - Java Access Bridge User Guide PDF">5.0</a></p>
                                                                </td>
                                                            </tr>
                                                            <tr class="TableStyle-bp-table-column-header-Body-Body1">
                                                                <td class="TableStyle-bp-table-column-header-BodyE-Column1-Body1">
                                                                    <p>Licensing for Robots Data Sheet</p>
                                                                </td>
                                                                <td style="text-align: center;" class="TableStyle-bp-table-column-header-BodyF-Column2-Body1">
                                                                    <p><a href="https://bpdocs.blueprism.com/z-pdf/bpe/licensing-for-robots/en-us/blue-prism-6-licensing-for-robots.pdf" target="_blank" title="Open the Blue Prism 6 - Licensing for Robots PDF" alt="Blue Prism 6 - Licensing for Robots PDF">6.0</a>
                                                                    </p>
                                                                </td>
                                                                <td style="text-align: center;" class="TableStyle-bp-table-column-header-BodyD-Column2-Body1">
                                                                    <p><a href="https://bpdocs.blueprism.com/z-pdf/bpe/licensing-for-robots/en-us/blue-prism-5-licensing-for-robots.pdf" target="_blank" title="Open the Blue Prism 5 - Licensing for Robots PDF" alt="Blue Prism 5 - Licensing for Robots PDF">5.0</a> | <a href="https://bpdocs.blueprism.com/z-pdf/bpe/licensing-for-robots/en-us/blue-prism-4-2-licensing-for-robots.pdf" target="_blank" title="Open the Blue Prism 4.2 - Licensing for Robots PDF" alt="Blue Prism 4.2 - Licensing for Robots PDF">4.2</a></p>
                                                                </td>
                                                            </tr>
                                                            <tr class="TableStyle-bp-table-column-header-Body-Body1">
                                                                <td class="TableStyle-bp-table-column-header-BodyE-Column1-Body1">
                                                                    <p>Load Balancing Reference Guide</p>
                                                                </td>
                                                                <td style="text-align: center;" class="TableStyle-bp-table-column-header-BodyF-Column2-Body1">
                                                                    <p><a href="https://bpdocs.blueprism.com/z-pdf/bpe/load-balancing/en-us/blue-prism-6-load-balancing-reference-guide.pdf" target="_blank" title="Open the Blue Prism 6 - Load Balancing Reference Guide PDF" alt="Blue Prism 6 - Load Balancing Reference Guide PDF">6.0</a>
                                                                    </p>
                                                                </td>
                                                                <td style="text-align: center;" class="TableStyle-bp-table-column-header-BodyD-Column2-Body1">
                                                                    <p><a href="https://bpdocs.blueprism.com/z-pdf/bpe/load-balancing/en-us/blue-prism-5-load-balancing-reference-guide.pdf" target="_blank" title="Open the Blue Prism 5 - Load Balancing Reference Guide PDF" alt="Blue Prism 5 - Load Balancing Reference Guide PDF">5.0</a>
                                                                    </p>
                                                                </td>
                                                            </tr>
                                                            <tr class="TableStyle-bp-table-column-header-Body-Body1">
                                                                <td class="TableStyle-bp-table-column-header-BodyE-Column1-Body1">
                                                                    <p>Login Agent User Guide</p>
                                                                </td>
                                                                <td style="text-align: center;" class="TableStyle-bp-table-column-header-BodyF-Column2-Body1">
                                                                    <p><a href="https://bpdocs.blueprism.com/z-pdf/bpe/login-agent/en-us/blue-prism-7-0-login-agent-user-guide.pdf" target="_blank" title="Open the Blue Prism 7.0 - Login Agent User Guide PDF" alt="Blue Prism 7.0 - Login Agent User Guide PDF">7.0</a>
                                                                    </p>
                                                                </td>
                                                                <td style="text-align: center;" class="TableStyle-bp-table-column-header-BodyD-Column2-Body1">
                                                                    <p><a href="https://bpdocs.blueprism.com/z-pdf/bpe/login-agent/en-us/blue-prism-6-10-login-agent-user-guide.pdf" target="_blank" title="Open the Blue Prism 6.10 - Login Agent User Guide PDF" alt="Blue Prism 6.10 - Login Agent User Guide PDF">6.10</a> | <a href="https://bpdocs.blueprism.com/z-pdf/bpe/login-agent/en-us/blue-prism-6-5-login-agent-user-guide.pdf" target="_blank" title="Open the Blue Prism 6.5 - Login Agent User Guide PDF" alt="Blue Prism 6.5 - Login Agent User Guide PDF">6.5</a> | <a href="https://bpdocs.blueprism.com/z-pdf/bpe/login-agent/en-us/blue-prism-6-login-agent-user-guide.pdf" target="_blank" title="Open the Blue Prism 6.0 - Login Agent User Guide PDF" alt="Blue Prism 6.0 - Login Agent User Guide PDF">6.0</a> | <a href="https://bpdocs.blueprism.com/z-pdf/bpe/login-agent/en-us/blue-prism-5-login-agent-user-guide.pdf" target="_blank" title="Open the Blue Prism 5 - Login Agent User Guide PDF" alt="Blue Prism 5 - Login Agent User Guide PDF">5.0</a> | <a href="https://bpdocs.blueprism.com/z-pdf/bpe/login-agent/en-us/blue-prism-4-2-login-agent-user-guide.pdf" target="_blank" title="Open the Blue Prism 4.2 - Login Agent User Guide PDF" alt="Blue Prism 4.2 - Login Agent User Guide PDF">4.2</a></p>
                                                                </td>
                                                            </tr>
                                                            <tr class="TableStyle-bp-table-column-header-Body-Body1">
                                                                <td class="TableStyle-bp-table-column-header-BodyE-Column1-Body1">
                                                                    <p>Maintain a Blue Prism Database Server Data Sheet</p>
                                                                </td>
                                                                <td style="text-align: center;" class="TableStyle-bp-table-column-header-BodyF-Column2-Body1">
                                                                    <p><a href="https://bpdocs.blueprism.com/z-pdf/bpe/maintain-bp-db-server/en-us/blue-prism-7-0-maintain-a-blue-prism-database-server.pdf" target="_blank" title="View the Blue Prism 7.0 - Maintaining a Blue Prism Database Server PDF" alt="Blue Prism 7.0 - Maintaining a Blue Prism Database Server PDF">7.0</a>
                                                                    </p>
                                                                </td>
                                                                <td style="text-align: center;" class="TableStyle-bp-table-column-header-BodyD-Column2-Body1">
                                                                    <p><a href="https://bpdocs.blueprism.com/z-pdf/bpe/maintain-bp-db-server/en-us/blue-prism-6-7-maintaining-a-blue-prism-database-server.pdf" target="_blank" title="View the Blue Prism 6.7 - Maintaining a Blue Prism Database Server PDF" alt="Blue Prism 6.7 - Maintaining a Blue Prism Database Server PDF">6.7</a> | <a href="https://bpdocs.blueprism.com/z-pdf/bpe/maintain-bp-db-server/en-us/blue-prism-6-maintaining-a-blue-prism-database-server.pdf" target="_blank" title="Open the Blue Prism 6 - Maintaining a Blue Prism Database Server PDF" alt="Blue Prism 6 - Maintaining a Blue Prism Database Server PDF">6.0</a> | <a href="https://bpdocs.blueprism.com/z-pdf/bpe/maintain-bp-db-server/en-us/blue-prism-5-maintaining-a-blue-prism-database-server.pdf" target="_blank" title="Open the Blue Prism 5 - Maintaining a Blue Prism Database Server PDF" alt="Blue Prism 5 - Maintaining a Blue Prism Database Server PDF">5.0</a> | <a href="https://bpdocs.blueprism.com/z-pdf/bpe/maintain-bp-db-server/en-us/blue-prism-4-2-maintaining-a-blue-prism-database-server.pdf" target="_blank" title="Open the Blue Prism 4.2 - Maintaining a Blue Prism Database Server PDF" alt="Blue Prism 4.2 - Maintaining a Blue Prism Database Server">4.2</a></p>
                                                                </td>
                                                            </tr>
                                                            <tr class="TableStyle-bp-table-column-header-Body-Body1">
                                                                <td class="TableStyle-bp-table-column-header-BodyE-Column1-Body1">
                                                                    <p>Microsoft IE&nbsp;Mode Data Sheet</p>
                                                                </td>
                                                                <td style="text-align: center;" class="TableStyle-bp-table-column-header-BodyF-Column2-Body1">
                                                                    <p><a href="https://bpdocs.blueprism.com/z-pdf/bpe/ie-mode/en-us/blue-prism-microsoft-edge-ie-mode.pdf" target="_blank" title="Open the Microsoft IE Mode Data Sheet PDF" alt="Microsoft IE Mode Data Sheet PDF">All</a>
                                                                    </p>
                                                                </td>
                                                                <td style="text-align: center;" class="TableStyle-bp-table-column-header-BodyD-Column2-Body1">
                                                                    <p>N/A</p>
                                                                </td>
                                                            </tr>
                                                            <tr class="TableStyle-bp-table-column-header-Body-Body1">
                                                                <td class="TableStyle-bp-table-column-header-BodyE-Column1-Body1">
                                                                    <p>Migrating to Microsoft IE&nbsp;Mode</p>
                                                                </td>
                                                                <td style="text-align: center;" class="TableStyle-bp-table-column-header-BodyF-Column2-Body1">
                                                                    <p><a href="https://bpdocs.blueprism.com/z-pdf/bpe/ie-mode/en-us/blue-prism-migrating-to-microsoft-edge-ie-mode.pdf" target="_blank" title="Open the Migrating to Microsoft IE Mode PDF" alt="Migrating to Microsoft IE Mode PDF">All</a>
                                                                    </p>
                                                                </td>
                                                                <td style="text-align: center;" class="TableStyle-bp-table-column-header-BodyD-Column2-Body1">
                                                                    <p>N/A</p>
                                                                </td>
                                                            </tr>
                                                            <tr class="TableStyle-bp-table-column-header-Body-Body1">
                                                                <td class="TableStyle-bp-table-column-header-BodyE-Column1-Body1">
                                                                    <p>Monitoring Data Sheet</p>
                                                                </td>
                                                                <td style="text-align: center;" class="TableStyle-bp-table-column-header-BodyF-Column2-Body1">
                                                                    <p><a href="https://bpdocs.blueprism.com/z-pdf/bpe/monitoring/en-us/blue-prism-6-monitoring.pdf" target="_blank" title="Open the Blue Prism 6 - Monitoring PDF" alt="Blue Prism 6 - Monitoring PDF">6.0</a>
                                                                    </p>
                                                                </td>
                                                                <td style="text-align: center;" class="TableStyle-bp-table-column-header-BodyD-Column2-Body1">
                                                                    <p><a href="https://bpdocs.blueprism.com/z-pdf/bpe/monitoring/en-us/blue-prism-5-monitoring.pdf" target="_blank" title="Open the Blue Prism 5 - Monitoring PDF" alt="Blue Prism 5 - Monitoring PDF">5.0</a> | <a href="https://bpdocs.blueprism.com/z-pdf/bpe/monitoring/en-us/blue-prism-4-2-monitoring.pdf" target="_blank" title="Open the Blue Prism 4.2 - Monitoring PDF" alt="Blue Prism 4.2 - Monitoring PDF">4.2</a></p>
                                                                </td>
                                                            </tr>
                                                            <tr class="TableStyle-bp-table-column-header-Body-Body1">
                                                                <td class="TableStyle-bp-table-column-header-BodyE-Column1-Body1">
                                                                    <p>Multi-Team Environments User Guide</p>
                                                                </td>
                                                                <td style="text-align: center;" class="TableStyle-bp-table-column-header-BodyF-Column2-Body1">
                                                                    <p><a href="https://bpdocs.blueprism.com/z-pdf/bpe/mte/en-us/blue-prism-7-1-multi-team-environments.pdf" target="_blank" title="Open the Blue Prism 7.1 - Multi-Team Environments User Guide PDF" alt=" Blue Prism 7.1 - Multi-Team Environments User Guide PDF">7.1</a>
                                                                    </p>
                                                                </td>
                                                                <td style="text-align: center;" class="TableStyle-bp-table-column-header-BodyD-Column2-Body1">
                                                                    <p><a href="https://bpdocs.blueprism.com/z-pdf/bpe/mte/en-us/blue-prism-7-0-multi-team-environments.pdf" target="_blank" title="Open the Blue Prism 7.0 - Multi-Team Environments User Guide PDF" alt=" Blue Prism 7.0 - Multi-Team Environments User Guide PDF">7.0</a> | <a href="https://bpdocs.blueprism.com/z-pdf/bpe/mte/en-us/blue-prism-6-10-multi-team-environments.pdf" target="_blank" title="Open the Blue Prism 6.10 - Multi-Team Environments User Guide PDF" alt=" Blue Prism 6.10 - Multi-Team Environments User Guide PDF">6.10</a> | <a href="https://bpdocs.blueprism.com/z-pdf/bpe/mte/en-us/blue-prism-6-7-multi-team-environments.pdf" target="_blank" title="Open the Blue Prism 6.7 - Multi-Team Environments User Guide PDF" alt="Multi-Team Environments User Guide PDF">6.7</a> | <a href="https://bpdocs.blueprism.com/z-pdf/bpe/mte/en-us/blue-prism-6-3-multi-team-environments.pdf" title="Open the Blue Prism 6.3 - Multi-Team Environments User Guide PDF" alt="Blue Prism 6.3 - Multi-Team Environments User Guide PDF" target="_blank">6.3</a></p>
                                                                </td>
                                                            </tr>
                                                            <tr class="TableStyle-bp-table-column-header-Body-Body1">
                                                                <td class="TableStyle-bp-table-column-header-BodyE-Column1-Body1">
                                                                    <p>PCS DSS&nbsp;Compliance</p>
                                                                </td>
                                                                <td style="text-align: center;" class="TableStyle-bp-table-column-header-BodyF-Column2-Body1">
                                                                    <p><a href="https://bpdocs.blueprism.com/z-pdf/bpe/pci-dss-compliance/en-us/blue-prism-6-pci-dss-compliance.pdf" target="_blank" title="Open the Blue Prism 6 - PCI DSS Compliance PDF" alt="Blue Prism 6 - PCI DSS Compliance PDF">6.0</a>
                                                                    </p>
                                                                </td>
                                                                <td style="text-align: center;" class="TableStyle-bp-table-column-header-BodyD-Column2-Body1">
                                                                    <p><a href="https://bpdocs.blueprism.com/z-pdf/bpe/pci-dss-compliance/en-us/blue-prism-5-pci-dss-compliance.pdf" target="_blank" title="Open the Blue Prism 5 - PCI DSS Compliance PDF" alt="Blue Prism 5 - PCI DSS Compliance PDF">5.0</a> | <a href="https://bpdocs.blueprism.com/z-pdf/bpe/pci-dss-compliance/en-us/blue-prism-4-2-pci-dss-compliance.pdf" target="_blank" title="Open the Blue Prism 4.2 - PCI DSS Compliance PDF" alt="Blue Prism 4.2 - PCI DSS Compliance PDF">4.2</a></p>
                                                                </td>
                                                            </tr>
                                                            <tr class="TableStyle-bp-table-column-header-Body-Body1">
                                                                <td class="TableStyle-bp-table-column-header-BodyE-Column1-Body1">
                                                                    <p>Provisioning a Blue Prism Database Server  Data Sheet</p>
                                                                </td>
                                                                <td style="text-align: center;" class="TableStyle-bp-table-column-header-BodyF-Column2-Body1">
                                                                    <p><a href="https://bpdocs.blueprism.com/z-pdf/bpe/provision-bp-db/en-us/blue-prism-7-1-provisioning-a-blue-prism-database-server.pdf" target="_blank" title="Open the Blue Prism 7.1 - Provisioning a Blue Prism Database Server PDF" alt="Blue Prism 7.1 - Provisioning a Blue Prism Database Server PDF">7.1</a>
                                                                    </p>
                                                                </td>
                                                                <td style="text-align: center;" class="TableStyle-bp-table-column-header-BodyD-Column2-Body1">
                                                                    <p><a href="https://bpdocs.blueprism.com/z-pdf/bpe/provision-bp-db/en-us/blue-prism-7-0-provisioning-a-blue-prism-database-server.pdf" target="_blank" title="Open Blue Prism 7.0 - Provision a Blue Prism database server" alt="Blue Prism 7.0 - Provision a Blue Prism database server">7.0</a> | <a href="https://bpdocs.blueprism.com/z-pdf/bpe/provision-bp-db/en-us/blue-prism-6-10-provisioning-a-blue-prism-database-server.pdf" target="_blank" title="Open the Blue Prism 6.10 - Provisioning a Blue Prism Database Server PDF" alt="Blue Prism 6.10 - Provisioning a Blue Prism Database Server PDF">6.10</a> | <a href="https://bpdocs.blueprism.com/z-pdf/bpe/provision-bp-db/en-us/blue-prism-6-provisioning-a-blue-prism-database-server.pdf" target="_blank" title="Open the Blue Prism 6.0 - Provisioning a Blue Prism Database Server PDF" alt="Blue Prism 6.0 - Provisioning a Blue Prism Database Server PDF">6.0</a> | <a href="https://bpdocs.blueprism.com/z-pdf/bpe/provision-bp-db/en-us/blue-prism-5-provisioning-a-blue-prism-database-server.pdf" target="_blank" title="Open the Blue Prism 5.0 - Provisioning a Blue Prism Database Server PDF" alt="Blue Prism 5.0 - Provisioning a Blue Prism Database Server PDF">5.0</a></p>
                                                                </td>
                                                            </tr>
                                                            <tr class="TableStyle-bp-table-column-header-Body-Body1">
                                                                <td class="TableStyle-bp-table-column-header-BodyE-Column1-Body1">
                                                                    <p>Remote Access Tools Data Sheet</p>
                                                                </td>
                                                                <td style="text-align: center;" class="TableStyle-bp-table-column-header-BodyF-Column2-Body1">
                                                                    <p><a href="https://bpdocs.blueprism.com/z-pdf/bpe/remote-access-tools/en-us/blue-prism-6-remote-access-tools.pdf" target="_blank" title="Open the Blue Prism 6 - Remote Access Tools PDF" alt="Blue Prism 6 - Remote Access Tools PDF">6.0</a>
                                                                    </p>
                                                                </td>
                                                                <td style="text-align: center;" class="TableStyle-bp-table-column-header-BodyD-Column2-Body1">
                                                                    <p><a href="https://bpdocs.blueprism.com/z-pdf/bpe/remote-access-tools/en-us/blue-prism-5-remote-access-tools.pdf" target="_blank" title="Open the Blue Prism 5 - Remote Access Tools PDF" alt="Blue Prism 5 - Remote Access Tools PDF">5.0</a> | <a href="https://bpdocs.blueprism.com/z-pdf/bpe/remote-access-tools/en-us/blue-prism-4-2-remote-access-tools.pdf" target="_blank" title="Open the Blue Prism 4.2 - Remote Access Tools PDF" alt="Blue Prism 4.2 - Remote Access Tools PDF">4.2</a></p>
                                                                </td>
                                                            </tr>
                                                            <tr class="TableStyle-bp-table-column-header-Body-Body1">
                                                                <td class="TableStyle-bp-table-column-header-BodyE-Column1-Body1">
                                                                    <p>Restoring a Blue Prism Environment  Data Sheet</p>
                                                                </td>
                                                                <td style="text-align: center;" class="TableStyle-bp-table-column-header-BodyF-Column2-Body1">
                                                                    <p><a href="https://bpdocs.blueprism.com/z-pdf/bpe/restore/en-us/blue-prism-7-0-restoring-a-blue-prism-environment.pdf" target="_blank" title="Open the Blue Prism 7.0 - Restoring a Blue Prism Environment PDF" alt="Blue Prism 7.0 - Restoring a Blue Prism Environment PDF">7.0</a>
                                                                    </p>
                                                                </td>
                                                                <td style="text-align: center;" class="TableStyle-bp-table-column-header-BodyD-Column2-Body1">
                                                                    <p><a href="https://bpdocs.blueprism.com/z-pdf/bpe/restore/en-us/blue-prism-6-10-restoring-a-blue-prism-environment.pdf" target="_blank" title="Open the Blue Prism 6.10 - Restoring a Blue Prism Environment PDF" alt="Blue Prism 6.10 - Restoring a Blue Prism Environment PDF">6.10</a> | <a href="https://bpdocs.blueprism.com/z-pdf/bpe/restore/en-us/blue-prism-6-8-restoring-a-blue-prism-environment.pdf" target="_blank" title="Open the Blue Prism 6.8 - Restoring a Blue Prism Environment PDF" alt="Blue Prism 6.8 - Restoring a Blue Prism Environment PDF">6.8</a></p>
                                                                </td>
                                                            </tr>
                                                            <tr class="TableStyle-bp-table-column-header-Body-Body1">
                                                                <td class="TableStyle-bp-table-column-header-BodyE-Column1-Body1">
                                                                    <p>Scheduler Manager</p>
                                                                </td>
                                                                <td style="text-align: center;" class="TableStyle-bp-table-column-header-BodyF-Column2-Body1">
                                                                    <p style="text-align: center;"><a href="https://bpdocs.blueprism.com/z-pdf/bpe/scheduler/en-us/blue-prism-7-0-scheduler-user-guide.pdf" target="_blank" title="Ope the Blue Prism 7.0 - Scheduler User Guide PDF" alt="Blue Prism 7.0 - Scheduler User Guide">7.0</a>
                                                                    </p>
                                                                </td>
                                                                <td style="text-align: center;" class="TableStyle-bp-table-column-header-BodyD-Column2-Body1">
                                                                    <p><a href="https://bpdocs.blueprism.com/z-pdf/bpe/scheduler/en-us/blue-prism-6-10-scheduler-user-guide.pdf" target="_blank" title="Ope the Blue Prism 6.10 - Scheduler User Guide PDF" alt="Blue Prism 6.10 - Scheduler User Guide">6.10</a>
                                                                    </p>
                                                                </td>
                                                            </tr>
                                                            <tr class="TableStyle-bp-table-column-header-Body-Body1">
                                                                <td class="TableStyle-bp-table-column-header-BodyE-Column1-Body1">
                                                                    <p>Securing Network Connectivity  Data Sheet</p>
                                                                </td>
                                                                <td style="text-align: center;" class="TableStyle-bp-table-column-header-BodyF-Column2-Body1">
                                                                    <p><a href="https://bpdocs.blueprism.com/z-pdf/bpe/network-connectivity/en-us/blue-prism-6-7-securing-network-connectivity.pdf" target="_blank" title="Open the Blue Prism 6.7 - Securing Network Connectivity PDF" alt="Blue Prism 6.7 - Securing Network Connectivity PDF">6.7</a>
                                                                    </p>
                                                                </td>
                                                                <td style="text-align: center;" class="TableStyle-bp-table-column-header-BodyD-Column2-Body1">
                                                                    <p><a href="https://bpdocs.blueprism.com/z-pdf/bpe/network-connectivity/en-us/blue-prism-6-3-securing-network-connectivity.pdf" target="_blank" title="Open the Blue Prism 6.3 - Securing Network Connectivity PDF" alt="Blue Prism 6.3 - Securing Network Connectivity PDF">6.3</a> | <a href="https://bpdocs.blueprism.com/z-pdf/bpe/network-connectivity/en-us/blue-prism-6-securing-network-connectivity.pdf" target="_blank" title="Open the Blue Prism 6 - Securing Network Connectivity PDF" alt="Blue Prism 6 - Securing Network Connectivity PDF">6.0</a> | <a href="https://bpdocs.blueprism.com/z-pdf/bpe/network-connectivity/en-us/blue-prism-5-securing-network-connectivity.pdf" target="_blank" title="Open the Blue Prism 5 - Securing Network Connectivity PDF" alt="Blue Prism 5 - Securing Network Connectivity PDF">5.0</a></p>
                                                                </td>
                                                            </tr>
                                                            <tr class="TableStyle-bp-table-column-header-Body-Body1">
                                                                <td class="TableStyle-bp-table-column-header-BodyE-Column1-Body1">
                                                                    <p>Selecting a Blue Prism Server Connection  Data Sheet</p>
                                                                </td>
                                                                <td style="text-align: center;" class="TableStyle-bp-table-column-header-BodyF-Column2-Body1">
                                                                    <p><a href="https://bpdocs.blueprism.com/z-pdf/bpe/selecting-bp-server-connection/en-us/blue-prism-6-9-selecting-a-blue-prism-server-connection-mode.pdf" target="_blank" title="Open the Blue Prism 6.9 - Selecting a BP Server Connection Mode PDF" alt="Blue Prism 6.9 - Selecting a BP Server Connection Mode PDF">6.9</a>
                                                                    </p>
                                                                </td>
                                                                <td style="text-align: center;" class="TableStyle-bp-table-column-header-BodyD-Column2-Body1">
                                                                    <p><a href="https://bpdocs.blueprism.com/z-pdf/bpe/selecting-bp-server-connection/en-us/blue-prism-6-selecting-a-blue-prism-server-connection-mode.pdf" target="_blank" title="Open the Blue Prism 6 - Selecting a BP Server Connection Mode PDF" alt="Blue Prism 6 - Selecting a BP Server Connection Mode PDF">6.0</a>
                                                                    </p>
                                                                </td>
                                                            </tr>
                                                            <tr class="TableStyle-bp-table-column-header-Body-Body1">
                                                                <td class="TableStyle-bp-table-column-header-BodyE-Column1-Body1">
                                                                    <p>Smart Card Deployments  Data Sheet</p>
                                                                </td>
                                                                <td style="text-align: center;" class="TableStyle-bp-table-column-header-BodyF-Column2-Body1">
                                                                    <p><a href="https://bpdocs.blueprism.com/z-pdf/bpe/smart-card-deployment/en-us/blue-prism-6-smart-card-deployment-models.pdf" target="_blank" title="Open the Blue Prism 6 - Smart Card Deployment Models PDF" alt="Blue Prism 6 - Smart Card Deployment Models PDF">6.0</a>
                                                                    </p>
                                                                </td>
                                                                <td style="text-align: center;" class="TableStyle-bp-table-column-header-BodyD-Column2-Body1">
                                                                    <p><a href="https://bpdocs.blueprism.com/z-pdf/bpe/smart-card-deployment/en-us/blue-prism-5-smart-card-deployment-models.pdf" target="_blank" title="Open the Blue Prism 5 - Smart Card Deployment Models PDF" alt="Blue Prism 5 - Smart Card Deployment Models PDF">5.0</a> | <a href="https://bpdocs.blueprism.com/z-pdf/bpe/smart-card-deployment/en-us/blue-prism-4-2-smart-card-deployment-models.pdf" target="_blank" title="Open the Blue Prism 4.2 - Smart Card Deployment Models PDF" alt="Blue Prism 4.2 - Smart Card Deployment Models PDF">4.2</a></p>
                                                                </td>
                                                            </tr>
                                                            <tr class="TableStyle-bp-table-column-header-Body-Body1">
                                                                <td class="TableStyle-bp-table-column-header-BodyE-Column1-Body1">
                                                                    <p>Thin Client Technology  Data Sheet</p>
                                                                </td>
                                                                <td style="text-align: center;" class="TableStyle-bp-table-column-header-BodyF-Column2-Body1">
                                                                    <p><a href="https://bpdocs.blueprism.com/z-pdf/bpe/thin-client-technology/en-us/blue-prism-6-thin-client-technology.pdf" target="_blank" title="Open the Blue Prism 6 - Thin Client Technology PDF" alt="Blue Prism 6 - Thin Client Technology PDF">6.0</a>
                                                                    </p>
                                                                </td>
                                                                <td style="text-align: center;" class="TableStyle-bp-table-column-header-BodyD-Column2-Body1">
                                                                    <p><a href="https://bpdocs.blueprism.com/z-pdf/bpe/thin-client-technology/en-us/blue-prism-5-thin-client-technology.pdf" target="_blank" title="Open the Blue Prism 5 - Thin Client Technology PDF" alt="Blue Prism 5 - Thin Client Technology PDF">5.0</a> | <a href="https://bpdocs.blueprism.com/z-pdf/bpe/thin-client-technology/en-us/blue-prism-4-2-thin-client-technology.pdf" target="_blank" title="Open the Blue Prism 4.2 - Thin Client Technology PDF" alt="Blue Prism 4.2 - Thin Client Technology PDF">4.2</a></p>
                                                                </td>
                                                            </tr>
                                                            <tr class="TableStyle-bp-table-column-header-Body-Body1">
                                                                <td class="TableStyle-bp-table-column-header-BodyE-Column1-Body1">
                                                                    <p>Upgrade Guide</p>
                                                                </td>
                                                                <td style="text-align: center;" class="TableStyle-bp-table-column-header-BodyF-Column2-Body1">
                                                                    <p><a href="https://bpdocs.blueprism.com/z-pdf/bpe/upgrade/en-us/blue-prism-upgrade-guide.pdf" target="_blank" title="Open the Blue Prism Upgrade Guide PDF" alt="Blue Prism Upgrade Guide PDF">All</a>
                                                                    </p>
                                                                </td>
                                                                <td style="text-align: center;" class="TableStyle-bp-table-column-header-BodyD-Column2-Body1">
                                                                    <p>–</p>
                                                                </td>
                                                            </tr>
                                                            <tr class="TableStyle-bp-table-column-header-Body-Body1">
                                                                <td class="TableStyle-bp-table-column-header-BodyE-Column1-Body1">
                                                                    <p>Web API User Guide</p>
                                                                </td>
                                                                <td style="text-align: center;" class="TableStyle-bp-table-column-header-BodyF-Column2-Body1">
                                                                    <p><a href="https://bpdocs.blueprism.com/z-pdf/bpe/web-api/en-us/blue-prism-7-0-web-api-user-guide.pdf" target="_blank" title="Open the Blue Prism 7.0 - Web API User Guide PDF" alt="Blue Prism 7.0 - Web API User Guide PDF">7.0</a>
                                                                    </p>
                                                                </td>
                                                                <td style="text-align: center;" class="TableStyle-bp-table-column-header-BodyD-Column2-Body1">
                                                                    <p><a href="https://bpdocs.blueprism.com/z-pdf/bpe/web-api/en-us/blue-prism-6-4-web-api-user-guide.pdf" target="_blank" title="Open the Blue Prism 6.4 - Web API User Guide PDF" alt="Blue Prism 6.4 - Web API User Guide PDF">6.4</a>
                                                                    </p>
                                                                </td>
                                                            </tr>
                                                            <tr class="TableStyle-bp-table-column-header-Body-Body1">
                                                                <td class="TableStyle-bp-table-column-header-BodyB-Column1-Body1">
                                                                    <p>Web Services User Guide</p>
                                                                </td>
                                                                <td style="text-align: center;" class="TableStyle-bp-table-column-header-BodyC-Column2-Body1">
                                                                    <p><a href="https://bpdocs.blueprism.com/z-pdf/bpe/web-services/en-us/blue-prism-6-3-web-services-user-guide.pdf" target="_blank" title="Open the Blue Prism 6.3 - Web Services User Guide PDF" alt="Blue Prism 6.3 - Web Services User Guide PDF">6.3</a>
                                                                    </p>
                                                                </td>
                                                                <td style="text-align: center;" class="TableStyle-bp-table-column-header-BodyA-Column2-Body1">
                                                                    <p><a href="https://bpdocs.blueprism.com/z-pdf/bpe/web-services/en-us/blue-prism-6-2-web-services-user-guide.pdf" target="_blank" title="Open the Blue Prism 6.3 - Web Services User Guide PDF" alt="Blue Prism 6.3 - Web Services User Guide PDF">6.2</a> | <a href="https://bpdocs.blueprism.com/z-pdf/bpe/web-services/en-us/blue-prism-6-web-services-user-guide.pdf" target="_blank" title="Open the Blue Prism 6 - Web Services User Guide PDF" alt="Blue Prism 6 - Web Services User Guide PDF">6.0</a> | <a href="https://bpdocs.blueprism.com/z-pdf/bpe/web-services/en-us/blue-prism-5-web-services-user-guide.pdf" target="_blank" title="Open the Blue Prism 5 - Web Services User Guide PDF" alt="Blue Prism 5 - Web Services User Guide PDF">5.0</a> | <a href="https://bpdocs.blueprism.com/z-pdf/bpe/web-services/en-us/blue-prism-4-2-web-services-user-guide.pdf" target="_blank" title="Open the Blue Prism 4.2 - Web Services User Guide PDF" alt="Blue Prism 4.2 - Web Services User Guide PDF">4.2</a></p>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    <h2 id="BluePrismDesktop" data-magellan-target="BluePrismDesktop">Blue Prism <span class="mc-variable ProductNames.Desktop variable">Desktop</span></h2>
                                                    <p>Blue Prism Desktop was released in June 2022 and utilizes the technology of Blue Prism 7.1 or later. </p>
                                                    <table style="margin-left: 0;margin-right: auto;mc-table-style: url('Resources/TableStyles/bp-table-column-header.css');" class="TableStyle-bp-table-column-header" cellspacing="0">
                                                        <colgroup><col class="TableStyle-bp-table-column-header-Column-Column1" style="width: 400px;" data-mc-conditions="">
                                                        <col class="TableStyle-bp-table-column-header-Column-Column2" data-mc-conditions="">
                                                        <col class="TableStyle-bp-table-column-header-Column-Column2" data-mc-conditions="">
                                                        </colgroup><thead>
                                                            <tr class="TableStyle-bp-table-column-header-Head-Header1">
                                                                <th style="padding-left: 8px;padding-right: 8px;padding-top: 3px;padding-bottom: 1px;border-bottom-style: solid;border-bottom-width: 1px;border-bottom-color: #dcdcdc;" class="TableStyle-bp-table-column-header-HeadE-Column1-Header1" scope="col">
                                                                    <p>Guide</p>
                                                                </th>
                                                                <th style="padding-left: 8px;padding-right: 8px;padding-top: 3px;padding-bottom: 1px;border-bottom-style: solid;border-bottom-width: 1px;border-bottom-color: #dcdcdc;text-align: center;" class="TableStyle-bp-table-column-header-HeadF-Column2-Header1" scope="col">
                                                                    <p>Latest PDF</p>
                                                                </th>
                                                                <th style="padding-left: 8px;padding-right: 8px;padding-top: 3px;padding-bottom: 1px;border-bottom-style: solid;border-bottom-width: 1px;border-bottom-color: #dcdcdc;text-align: center;" class="TableStyle-bp-table-column-header-HeadD-Column2-Header1" scope="col">
                                                                    <p>Previous PDF versions</p>
                                                                </th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr class="TableStyle-bp-table-column-header-Body-Body1">
                                                                <td class="TableStyle-bp-table-column-header-BodyE-Column1-Body1">
                                                                    <p>Desktop Administrator Guide</p>
                                                                </td>
                                                                <td style="text-align: center;" class="TableStyle-bp-table-column-header-BodyF-Column2-Body1">
                                                                    <p><a href="https://bpdocs.blueprism.com/z-pdf/bpe/desktop/en-us/blue-prism-desktop-1-0-administrator-guide.pdf" target="_blank" title="Open the Blue Prism Desktop 1.0 Administrator Guide PDF" alt="Blue Prism Desktop 1.0 Administrator Guide PDF">1.0</a>
                                                                    </p>
                                                                </td>
                                                                <td style="text-align: center;" class="TableStyle-bp-table-column-header-BodyD-Column2-Body1">–</td>
                                                            </tr>
                                                            <tr class="TableStyle-bp-table-column-header-Body-Body1">
                                                                <td class="TableStyle-bp-table-column-header-BodyE-Column1-Body1">
                                                                    <p>Desktop Install and Configure Guide</p>
                                                                </td>
                                                                <td style="text-align: center;" class="TableStyle-bp-table-column-header-BodyF-Column2-Body1">
                                                                    <p><a href="https://bpdocs.blueprism.com/z-pdf/bpe/desktop/en-us/blue-prism-desktop-1-0-install-and-configure-guide.pdf" target="_blank" title="Open the Blue Prism Desktop 1.0 Install and Configure Guide PDF" alt="Blue Prism Desktop 1.0 Install and Configure Guide PDF">1.0</a>
                                                                    </p>
                                                                </td>
                                                                <td style="text-align: center;" class="TableStyle-bp-table-column-header-BodyD-Column2-Body1">–</td>
                                                            </tr>
                                                            <tr class="TableStyle-bp-table-column-header-Body-Body1">
                                                                <td class="TableStyle-bp-table-column-header-BodyE-Column1-Body1">
                                                                    <p>Desktop Process Developer Guide</p>
                                                                </td>
                                                                <td style="text-align: center;" class="TableStyle-bp-table-column-header-BodyF-Column2-Body1">
                                                                    <p><a href="https://bpdocs.blueprism.com/z-pdf/bpe/desktop/en-us/blue-prism-desktop-1-0-process-developer-guide.pdf" target="_blank" title="Open the Blue Prism Desktop 1.0 Process Developer Guide PDF" alt="Blue Prism Desktop 1.0 Process Developer Guide PDF">1.0</a>
                                                                    </p>
                                                                </td>
                                                                <td style="text-align: center;" class="TableStyle-bp-table-column-header-BodyD-Column2-Body1">–</td>
                                                            </tr>
                                                            <tr class="TableStyle-bp-table-column-header-Body-Body1">
                                                                <td class="TableStyle-bp-table-column-header-BodyB-Column1-Body1">
                                                                    <p>Desktop User Guide</p>
                                                                </td>
                                                                <td style="text-align: center;" class="TableStyle-bp-table-column-header-BodyC-Column2-Body1">
                                                                    <p><a href="https://bpdocs.blueprism.com/z-pdf/bpe/desktop/en-us/blue-prism-desktop-1-0-user-guide.pdf" target="_blank" title="Open the Blue Prism Desktop 1.0 User Guide PDF" alt="Blue Prism Desktop 1.0 User Guide PDF">1.0</a>
                                                                    </p>
                                                                </td>
                                                                <td style="text-align: center;" class="TableStyle-bp-table-column-header-BodyA-Column2-Body1">–</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    <h2 id="Mainframeguides" data-magellan-target="Mainframeguides">Mainframe guides</h2>
                                                    <table style="margin-left: 0;margin-right: auto;mc-table-style: url('Resources/TableStyles/bp-table-column-header.css');" class="TableStyle-bp-table-column-header" cellspacing="0">
                                                        <colgroup><col class="TableStyle-bp-table-column-header-Column-Column1" style="width: 400px;">
                                                        <col class="TableStyle-bp-table-column-header-Column-Column2">
                                                        <col class="TableStyle-bp-table-column-header-Column-Column2">
                                                        </colgroup><thead>
                                                            <tr class="TableStyle-bp-table-column-header-Head-Header1">
                                                                <th style="padding-left: 8px;padding-right: 8px;padding-top: 3px;padding-bottom: 1px;border-bottom-style: solid;border-bottom-width: 1px;border-bottom-color: #dcdcdc;" class="TableStyle-bp-table-column-header-HeadE-Column1-Header1" scope="col">
                                                                    <p>Guide</p>
                                                                </th>
                                                                <th style="padding-left: 8px;padding-right: 8px;padding-top: 3px;padding-bottom: 1px;border-bottom-style: solid;border-bottom-width: 1px;border-bottom-color: #dcdcdc;text-align: center;" class="TableStyle-bp-table-column-header-HeadF-Column2-Header1" scope="col">
                                                                    <p>Latest PDF</p>
                                                                </th>
                                                                <th style="padding-left: 8px;padding-right: 8px;padding-top: 3px;padding-bottom: 1px;border-bottom-style: solid;border-bottom-width: 1px;border-bottom-color: #dcdcdc;text-align: center;" class="TableStyle-bp-table-column-header-HeadD-Column2-Header1" scope="col">
                                                                    <p>Previous PDF versions</p>
                                                                </th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr class="TableStyle-bp-table-column-header-Body-Body1">
                                                                <td class="TableStyle-bp-table-column-header-BodyE-Column1-Body1">
                                                                    <p>Using Blue Prism Mainframe</p>
                                                                </td>
                                                                <td style="text-align: center;" class="TableStyle-bp-table-column-header-BodyF-Column2-Body1">
                                                                    <p><a href="https://bpdocs.blueprism.com/z-pdf/bpe/mainframe/blue-prism-mainframe-guide-using-blue-prism-mainframe-spy.pdf" target="_blank" title="Blue Prism Mainframe Guide - Using the Blue Prism Mainframe PDF" alt="Blue Prism Mainframe Guide - Using the Blue Prism Mainframe PDF">6.0</a>
                                                                    </p>
                                                                </td>
                                                                <td style="text-align: center;" class="TableStyle-bp-table-column-header-BodyD-Column2-Body1">
                                                                    <p>–</p>
                                                                </td>
                                                            </tr>
                                                            <tr class="TableStyle-bp-table-column-header-Body-Body1">
                                                                <td class="TableStyle-bp-table-column-header-BodyE-Column1-Body1">
                                                                    <p>Attachmate InfoConnect</p>
                                                                </td>
                                                                <td style="text-align: center;" class="TableStyle-bp-table-column-header-BodyF-Column2-Body1">
                                                                    <p><a href="https://bpdocs.blueprism.com/z-pdf/bpe/mainframe/blue-prism-mainframe-guide-attachmate-infoconnect.pdf" target="_blank" title="Blue Prism Mainframe Guide - Attachmate InfoConnect PDF" alt="Blue Prism Mainframe Guide - Attachmate InfoConnect PDF">6.0</a>
                                                                    </p>
                                                                </td>
                                                                <td style="text-align: center;" class="TableStyle-bp-table-column-header-BodyD-Column2-Body1">
                                                                    <p>–</p>
                                                                </td>
                                                            </tr>
                                                            <tr class="TableStyle-bp-table-column-header-Body-Body1">
                                                                <td class="TableStyle-bp-table-column-header-BodyE-Column1-Body1">
                                                                    <p>Ericom Powerterm InterConnect</p>
                                                                </td>
                                                                <td style="text-align: center;" class="TableStyle-bp-table-column-header-BodyF-Column2-Body1">
                                                                    <p><a href="https://bpdocs.blueprism.com/z-pdf/bpe/mainframe/blue-prism-mainframe-guide-ericom-powerterminter-connect.pdf" target="_blank" title="Blue Prism Mainframe Guide - Powerterm InterConnect PDF" alt="Blue Prism Mainframe Guide - Powerterm InterConnect PDF">6.0</a>
                                                                    </p>
                                                                </td>
                                                                <td style="text-align: center;" class="TableStyle-bp-table-column-header-BodyD-Column2-Body1">
                                                                    <p>–</p>
                                                                </td>
                                                            </tr>
                                                            <tr class="TableStyle-bp-table-column-header-Body-Body1">
                                                                <td class="TableStyle-bp-table-column-header-BodyE-Column1-Body1">
                                                                    <p>IBM&nbsp;iAccess Client Solutions</p>
                                                                </td>
                                                                <td style="text-align: center;" class="TableStyle-bp-table-column-header-BodyF-Column2-Body1">
                                                                    <p><a href="https://bpdocs.blueprism.com/z-pdf/bpe/mainframe/blue-prism-mainframe-guide-ibm-iaccess-client-solutions.pdf" target="_blank" title="Blue Prism Mainframe Guide - IBM iAccess Client Solutions PDF" alt="Blue Prism Mainframe Guide - IBM iAccess Client Solutions PDF">6.0</a>
                                                                    </p>
                                                                </td>
                                                                <td style="text-align: center;" class="TableStyle-bp-table-column-header-BodyD-Column2-Body1">
                                                                    <p>–</p>
                                                                </td>
                                                            </tr>
                                                            <tr class="TableStyle-bp-table-column-header-Body-Body1">
                                                                <td class="TableStyle-bp-table-column-header-BodyE-Column1-Body1">
                                                                    <p>IBM iAccess with HostExplorer</p>
                                                                </td>
                                                                <td style="text-align: center;" class="TableStyle-bp-table-column-header-BodyF-Column2-Body1">
                                                                    <p><a href="https://bpdocs.blueprism.com/z-pdf/bpe/mainframe/blue-prism-mainframe-guide-ibm-iaccess-client-with-opentext-hostexplorer.pdf" target="_blank" title="Blue Prism Mainframe Guide - IBM iAccess with HostExplorer PDF" alt="Blue Prism Mainframe Guide - IBM iAccess with HostExplorer PDF">6.0</a>
                                                                    </p>
                                                                </td>
                                                                <td style="text-align: center;" class="TableStyle-bp-table-column-header-BodyD-Column2-Body1">
                                                                    <p>–</p>
                                                                </td>
                                                            </tr>
                                                            <tr class="TableStyle-bp-table-column-header-Body-Body1">
                                                                <td class="TableStyle-bp-table-column-header-BodyE-Column1-Body1">
                                                                    <p>IBM&nbsp;Personal Communications</p>
                                                                </td>
                                                                <td style="text-align: center;" class="TableStyle-bp-table-column-header-BodyF-Column2-Body1">
                                                                    <p><a href="https://bpdocs.blueprism.com/z-pdf/bpe/mainframe/blue-prism-mainframe-guide-ibmpcomm.pdf" target="_blank" title="Blue Prism Mainframe Guide - IBM Personal Communications PDF" alt="Blue Prism Mainframe Guide - IBM Personal Communications PDF">6.0</a>
                                                                    </p>
                                                                </td>
                                                                <td style="text-align: center;" class="TableStyle-bp-table-column-header-BodyD-Column2-Body1">
                                                                    <p>–</p>
                                                                </td>
                                                            </tr>
                                                            <tr class="TableStyle-bp-table-column-header-Body-Body1">
                                                                <td class="TableStyle-bp-table-column-header-BodyE-Column1-Body1">
                                                                    <p>Micro Focus Extra</p>
                                                                </td>
                                                                <td style="text-align: center;" class="TableStyle-bp-table-column-header-BodyF-Column2-Body1">
                                                                    <p><a href="https://bpdocs.blueprism.com/z-pdf/bpe/mainframe/blue-prism-mainframe-guide-micro-focus-attachmate-extra.pdf" target="_blank" title="Blue Prism Mainframe Guide - Micro Focus Extra PDF" alt="Blue Prism Mainframe Guide - Micro Focus Extra PDF">6.0</a>
                                                                    </p>
                                                                </td>
                                                                <td style="text-align: center;" class="TableStyle-bp-table-column-header-BodyD-Column2-Body1">
                                                                    <p>–</p>
                                                                </td>
                                                            </tr>
                                                            <tr class="TableStyle-bp-table-column-header-Body-Body1">
                                                                <td class="TableStyle-bp-table-column-header-BodyE-Column1-Body1">
                                                                    <p>Micro Focus InfoConnect</p>
                                                                </td>
                                                                <td style="text-align: center;" class="TableStyle-bp-table-column-header-BodyF-Column2-Body1">
                                                                    <p><a href="https://bpdocs.blueprism.com/z-pdf/bpe/mainframe/blue-prism-mainframe-guide-micro-focus-infoconnect.pdf" target="_blank" title="Blue Prism Mainframe Guide - Micro Focus InfoConnect PDF" alt="Blue Prism Mainframe Guide - Micro Focus InfoConnect PDF">6.0</a>
                                                                    </p>
                                                                </td>
                                                                <td style="text-align: center;" class="TableStyle-bp-table-column-header-BodyD-Column2-Body1">
                                                                    <p>–</p>
                                                                </td>
                                                            </tr>
                                                            <tr class="TableStyle-bp-table-column-header-Body-Body1">
                                                                <td class="TableStyle-bp-table-column-header-BodyE-Column1-Body1">
                                                                    <p>Micro Focus Reflection</p>
                                                                </td>
                                                                <td style="text-align: center;" class="TableStyle-bp-table-column-header-BodyF-Column2-Body1">
                                                                    <p><a href="https://bpdocs.blueprism.com/z-pdf/bpe/mainframe/blue-prism-mainframe-guide-micro-focus-reflection-for-desktop.pdf" target="_blank" title="Blue Prism Mainframe Guide - Micro Focus Reflection PDF" alt="Blue Prism Mainframe Guide - Micro Focus Reflection PDF">6.0</a>
                                                                    </p>
                                                                </td>
                                                                <td style="text-align: center;" class="TableStyle-bp-table-column-header-BodyD-Column2-Body1">
                                                                    <p>–</p>
                                                                </td>
                                                            </tr>
                                                            <tr class="TableStyle-bp-table-column-header-Body-Body1">
                                                                <td class="TableStyle-bp-table-column-header-BodyE-Column1-Body1">
                                                                    <p>Micro Focus RUMBA</p>
                                                                </td>
                                                                <td style="text-align: center;" class="TableStyle-bp-table-column-header-BodyF-Column2-Body1">
                                                                    <p><a href="https://bpdocs.blueprism.com/z-pdf/bpe/mainframe/blue-prism-mainframe-guide-microfocus-rumba.pdf" target="_blank" title="Blue Prism Mainframe Guide - Micro Focus RUMBA PDF" alt="Blue Prism Mainframe Guide - Micro Focus RUMBA PDF">6.0</a>
                                                                    </p>
                                                                </td>
                                                                <td style="text-align: center;" class="TableStyle-bp-table-column-header-BodyD-Column2-Body1">
                                                                    <p>–</p>
                                                                </td>
                                                            </tr>
                                                            <tr class="TableStyle-bp-table-column-header-Body-Body1">
                                                                <td class="TableStyle-bp-table-column-header-BodyE-Column1-Body1">
                                                                    <p>OpenText HostExplorer</p>
                                                                </td>
                                                                <td style="text-align: center;" class="TableStyle-bp-table-column-header-BodyF-Column2-Body1">
                                                                    <p><a href="https://bpdocs.blueprism.com/z-pdf/bpe/mainframe/blue-prism-mainframe-guide-opentext-hostexplorer.pdf" target="_blank" title="Blue Prism Mainframe Guide - OpenText HostExplorer PDF" alt="Blue Prism Mainframe Guide - OpenText HostExplorer PDF">6.0</a>
                                                                    </p>
                                                                </td>
                                                                <td style="text-align: center;" class="TableStyle-bp-table-column-header-BodyD-Column2-Body1">
                                                                    <p>–</p>
                                                                </td>
                                                            </tr>
                                                            <tr class="TableStyle-bp-table-column-header-Body-Body1">
                                                                <td class="TableStyle-bp-table-column-header-BodyE-Column1-Body1">
                                                                    <p>Quick3270</p>
                                                                </td>
                                                                <td style="text-align: center;" class="TableStyle-bp-table-column-header-BodyF-Column2-Body1">
                                                                    <p><a href="https://bpdocs.blueprism.com/z-pdf/bpe/mainframe/blue-prism-mainframe-guide-quick3270-mainframe-emulator.pdf" target="_blank" title="Blue Prism Mainframe Guide - Quick3270 PDF" alt="Blue Prism Mainframe Guide - Quick3270 PDF">6.0</a>
                                                                    </p>
                                                                </td>
                                                                <td style="text-align: center;" class="TableStyle-bp-table-column-header-BodyD-Column2-Body1">
                                                                    <p>–</p>
                                                                </td>
                                                            </tr>
                                                            <tr class="TableStyle-bp-table-column-header-Body-Body1">
                                                                <td class="TableStyle-bp-table-column-header-BodyE-Column1-Body1">
                                                                    <p>Reflection for IBM 9</p>
                                                                </td>
                                                                <td style="text-align: center;" class="TableStyle-bp-table-column-header-BodyF-Column2-Body1">
                                                                    <p><a href="https://bpdocs.blueprism.com/z-pdf/bpe/mainframe/blue-prism-mainframe-guide-reflection-for-ibm-9-1.pdf" target="_blank" title="Blue Prism Mainframe Guide - Reflection for IBM 9 PDF" alt="Blue Prism Mainframe Guide - Reflection for IBM 9 PDF">6.0</a>
                                                                    </p>
                                                                </td>
                                                                <td style="text-align: center;" class="TableStyle-bp-table-column-header-BodyD-Column2-Body1">
                                                                    <p>–</p>
                                                                </td>
                                                            </tr>
                                                            <tr class="TableStyle-bp-table-column-header-Body-Body1">
                                                                <td class="TableStyle-bp-table-column-header-BodyE-Column1-Body1">
                                                                    <p>Rocket BlueZone</p>
                                                                </td>
                                                                <td style="text-align: center;" class="TableStyle-bp-table-column-header-BodyF-Column2-Body1">
                                                                    <p><a href="https://bpdocs.blueprism.com/z-pdf/bpe/mainframe/blue-prism-mainframe-guide-rocket-bluezone-emulator.pdf" target="_blank" title="Blue Prism Mainframe Guide - Rocket BlueZone PDF" alt="Blue Prism Mainframe Guide - Rocket BlueZone PDF">6.0</a>
                                                                    </p>
                                                                </td>
                                                                <td style="text-align: center;" class="TableStyle-bp-table-column-header-BodyD-Column2-Body1">
                                                                    <p>–</p>
                                                                </td>
                                                            </tr>
                                                            <tr class="TableStyle-bp-table-column-header-Body-Body1">
                                                                <td class="TableStyle-bp-table-column-header-BodyB-Column1-Body1">
                                                                    <p>Rocket Passport to Host</p>
                                                                </td>
                                                                <td style="text-align: center;" class="TableStyle-bp-table-column-header-BodyC-Column2-Body1">
                                                                    <p><a href="https://bpdocs.blueprism.com/z-pdf/bpe/mainframe/blue-prism-mainframe-guide-rocket-passport-pc-to-host.pdf" target="_blank" title="Blue Prism Mainframe Guide - Rocket Passport PC to Host PDF" alt="Blue Prism Mainframe Guide - Rocket Passport PC to Host PDF">6.0</a>
                                                                    </p>
                                                                </td>
                                                                <td style="text-align: center;" class="TableStyle-bp-table-column-header-BodyA-Column2-Body1">
                                                                    <p>–</p>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>