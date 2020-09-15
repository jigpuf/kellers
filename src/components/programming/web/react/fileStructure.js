import React from 'react';

class FileStructure extends React.Component {
  render () {
    return (
      <div>
        <h1>File Structure of React App</h1>
        <h2>SRC Folder</h2>
        Program lives here
        <h2>Public Folder</h2>
        Contains static files like HTML, images etc.
        <h2>Node Modules</h2>
        Contains all dependencies. Don't need to go here much.
        <h2>Package.json file</h2>
        Project config files. List dependencies needed
        <h2>Package-lock.json file</h2>
        Records version of all dependencies in project
        <h2>Read Me</h2>
        Tells how to run Project
        <h2>GitIgnore </h2>
        These are things not transfered to Git when uploading.
      </div>
    );
  }
}

export default FileStructure;
