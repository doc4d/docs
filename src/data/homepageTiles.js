import React from 'react';
import Translate, { translate } from '@docusaurus/Translate';
import Link from '@docusaurus/Link';

const localizedLinks = {
  "homepage.sections.textensions.4D-Write-Pro-Reference-url" : translate({
    message: 'https://doc.4d.com/4Dv20R9/4D/20-R9/4D-Write-Pro-Reference.100-7547144.en.html',
    id: 'homepage.sections.textensions.4D-Write-Pro-Reference-url',
  }),
  "homepage.sections.textensions.4D-Progress-url" : translate({
    message: 'https://doc.4d.com/4Dv20R9/4D/20-R9/4D-Progress.100-7545461.en.html',
    id: 'homepage.sections.textensions.4D-Progress-url',
  }),
  "homepage.sections.textensions.4D-SVG-Component-url" : translate({
    message: 'https://doc.4d.com/4Dv20R9/4D/20-R9/4D-SVG-Component.100-7546332.en.html',
    id: 'homepage.sections.textensions.4D-SVG-Component-url',
  }),
  "homepage.sections.textensions.4D-Widgets-url" : translate({
    message: 'https://doc.4d.com/4Dv20R9/4D/20-R9/4D-Widgets.100-7546981.en.html',
    id: 'homepage.sections.textensions.4D-Widgets-url',
  }),
  "homepage.sections.mobile-applications.4D-for-iOS-Archive-url" : translate({
    message: 'https://developer.4d.com/4d-for-ios/docs/en/overview.html',
    id: 'homepage.sections.mobile-applications.4D-for-iOS-Archive-url',
  }),
  "homepage.sections.mobile-applications.go-mobile-url" : translate({
    message: 'https://developer.4d.com/go-mobile',
    id: 'homepage.sections.mobile-applications.go-mobile-url',
  })
};

const Sections = [
  {
    
title: (
    <>
      <i class="fa-solid fa-rocket" style={{ marginRight: '0.6rem', color: '#6c63ff' }}></i>
      <Translate id="homepage.sections.getting-started.title">
        Getting Started
      </Translate>
    </>
  ),
    links: (
      <div className="homepageLinks">
        <Link to="GettingStarted/installation" >
          <Translate>Installation</Translate>
        </Link>
        <Link to="GettingStarted/creating" >
          <Translate>Creating or opening a project</Translate>
        </Link>
        <Link to="Notes/updates" ><i class="fa-solid fa-pen-to-square" style={{ marginRight: '0.6rem', color: '#6c63ff' }}></i>
          <i><Translate>Release Notes</Translate></i>
        </Link>
      </div>
    ),
  }, {
    title: (
    <>
      <i class="fa-solid fa-hammer" style={{ marginRight: '0.6rem', color: '#6c63ff' }}></i>
      <Translate id="homepage.sections.core-development.title">
          Project management & IDE
      </Translate>
    </>
  ),
    links: (
      <div className="homepageLinks">
        <Link to="Project/architecture" >
          <Translate>Architecture</Translate>
        </Link>
        <Link to="settings/overview" >
          <Translate>Project Settings</Translate>
        </Link>
        <Link to="Project/code-overview" >
          <Translate>Methods & Classes</Translate>
        </Link>
        <Link to="code-editor/write-class-method" >
          <Translate>Code Editor</Translate>
        </Link>
        <Link to="Project/compiler" >
          <Translate>Compilation</Translate>
        </Link>
        <Link to="Project/components" >
          <Translate>Dependencies</Translate>
        </Link>
        <Link to="Desktop/building" >
          <Translate>Build Application</Translate>
        </Link>
        <Link to="Debugging/basics" >
          <Translate>Debugging & logs</Translate>
        </Link>
        <Link to="Preferences/overview" >
          <Translate>Preferences</Translate>
        </Link>
      </div>
    ),
  },{
    title: (
    <>
      <i class="fa-solid fa-code" style={{ marginRight: '0.6rem', color: '#6c63ff' }}></i>
      <Translate id="homepage.sections.language.title">
          4D Language & ORDA
      </Translate>
    </>
  ),
    links: (
      <div className="homepageLinks">
        <Link to="Concepts/about">
          <Translate>Concepts</Translate>
        </Link>
        <Link to="category/commands">
          <Translate>Commands by theme</Translate>
        </Link>
        <Link to="category/class-API-reference" >
          <Translate>Classes</Translate>
        </Link>
        <Link to="ORDA/overview">
          <Translate>ORDA</Translate>
        </Link>
        <Link to="category/develop">
          <Translate>Core features</Translate>
        </Link>
      </div>
    ),
  },
  {
    title: (
    <>
      <i class="fa-solid fa-globe" style={{ marginRight: '0.6rem', color: '#6c63ff' }}></i>
      <Translate id="homepage.sections.web-applications.title">
          Web applications
      </Translate>
    </>
  ),
    links: (
      <div className="homepageLinks">
        <Link to="WebServer/overview">
          <Translate>Web Server</Translate>
        </Link>
        <Link to="WebServer/gettingStarted">
          <Translate>Web Development</Translate>
        </Link>
        <Link to="WebServer/qodly-studio">
          <Translate>Qodly Studio</Translate>
        </Link>
        <Link to="REST/gettingStarted">
          <Translate>REST Server</Translate>
        </Link>
      </div>
    ),
  },
  {
    title: (
    <>
      <i class="fa-solid fa-computer" style={{ marginRight: '0.6rem', color: '#6c63ff' }}></i>
      <Translate id="homepage.sections.desktop-applications.title">
          Desktop Applications
      </Translate>
    </>
  ),
    links: (
      <div className="homepageLinks">
        <Link to="Desktop/clientServer" >
          <Translate>Client/Server</Translate>
        </Link>
        <Link to="Users/overview">
          <Translate>Access Rights</Translate>
        </Link>
        <Link to="FormEditor/forms" >
          <Translate>Forms</Translate>
        </Link>
        <Link to="Menus/overview" >
          <Translate>Menus</Translate>
        </Link>
        <Link to="Desktop/user-settings" >
          <Translate>User Settings</Translate>
        </Link>
                <Link to="Admin/tls">
          <Translate>TLS Protocol</Translate>
        </Link>
        <Link to="Admin/licenses">
          <Translate>Licenses</Translate>
        </Link>
        <Link to="MSC/overview">
          <Translate>Maintenance and Security Center</Translate>
        </Link>
        <Link to="Backup/overview">
          <Translate>Backup and Restore</Translate>
        </Link>
                 <Link to="ORDA/overview" >
          <Translate>Object Relational Data Access (ORDA)</Translate>
        </Link>
        <Link to="Develop/processes" >
          <Translate>Processes</Translate>
        </Link>
        <Link to="Tags/transformation-tags" >
          <Translate>Transformation Tags</Translate>
        </Link>

      </div>
    ),
  },
  {
    title: (
    <>
      <i class="fa-solid fa-puzzle-piece" style={{ marginRight: '0.6rem', color: '#6c63ff' }}></i>
      <Translate id="homepage.sections.textensions.title">
          Extensions
      </Translate>
    </>
  ),
    links: (
      <div className="homepageLinks">
        <Link to="Extensions/overview">
          <Translate>Overview</Translate>
        </Link>
        <Link to="ViewPro/getting-started">
          <Translate>4D View Pro</Translate>
        </Link>
        <Link to="category/4d-write-pro">
          <Translate>4D Write Pro</Translate>
        </Link>
        <Link to="https://developer.4d.com/4D-NetKit">
          <Translate>4D NetKit</Translate> <i class="fa-solid fa-up-right-from-square"></i>
        </Link>
        <Link to="aikit/overview">
          <Translate>4D AIKit</Translate>
        </Link>
        <Link to={localizedLinks["homepage.sections.textensions.4D-Progress-url"]}>
          <Translate>4D Progress</Translate> <i class="fa-solid fa-up-right-from-square"></i>
        </Link>
        <Link to={localizedLinks["homepage.sections.textensions.4D-SVG-Component-url"]}>
          <Translate>4D SVG</Translate> <i class="fa-solid fa-up-right-from-square"></i>
        </Link>
        <Link to={localizedLinks["homepage.sections.textensions.4D-Widgets-url"]}>
          <Translate>4D Widgets</Translate> <i class="fa-solid fa-up-right-from-square"></i>
        </Link>
        <Link to="Extensions/develop-components">
          <Translate>Developing Components</Translate>
        </Link>
        <Link to="Extensions/develop-plug-ins">
          <Translate>Developing Plugins</Translate>
        </Link>
      </div>
    ),
  },
  {
    title:(
    <>
      <i class="fa-solid fa-user-tie" style={{ marginRight: '0.6rem', color: '#6c63ff' }}></i>
      <Translate id="homepage.sections.administration.title">
          Administration
      </Translate>
    </>
  ),
    links: (
      <div className="homepageLinks">
        <Link to="ServerWindow/overview" >
          <Translate>4D Server Administration Window</Translate>
        </Link>
        <Link to="Admin/webAdmin">
          <Translate>Web Administration</Translate>
        </Link>
        <Link to="Admin/cli">
          <Translate>Command Line Interface</Translate>
        </Link>
        <Link to="Admin/tls">
          <Translate>TLS Protocol</Translate>
        </Link>
        <Link to="Admin/licenses">
          <Translate>Licenses</Translate>
        </Link>
        <Link to="MSC/overview">
          <Translate>Maintenance and Security Center</Translate>
        </Link>
        <Link to="Backup/overview">
          <Translate>Backup and Restore</Translate>
        </Link>
      </div>
    ),
  },
  {
    title: (
    <>
      <i class="fa-solid fa-plus" style={{ marginRight: '0.6rem', color: '#6c63ff' }}></i>
      <Translate id="homepage.sections.more.title">
          More docs
      </Translate>
    </>
  ),
    links: (
      <div className="homepageLinks">
        <Link to={localizedLinks["homepage.sections.mobile-applications.go-mobile-url"]}>
          <Translate>Go Mobile with 4D</Translate> <i class="fa-solid fa-up-right-from-square"></i>
        </Link>
        <Link to="https://github.com/4d/4D-Mobile-App-Server">
          <Translate>4D Mobile App Server</Translate> <i class="fa-solid fa-up-right-from-square"></i>
        </Link>
        <Link to={localizedLinks["homepage.sections.mobile-applications.4D-for-iOS-Archive-url"]}>
          <Translate>4D for iOS (Archive)</Translate> <i class="fa-solid fa-up-right-from-square"></i>
        </Link>
      </div>
    ),
  },
];

export default Sections;
