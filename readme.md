# DocPad Instance Spawn

#### Ffunction to spawn DocPad instances on unique ports via htt-proxy module. 

`docpadSpawn(port)`

##### Install
`npm install docpad-instance-spawn --save`

#####Example: 
`docpadSpawn(9966)`

###### Note
Right now the DocPad instance looks for a `docpad.coffee` file at the root of the project. In that file you'll have to clearly set the path to where your docpad folder is in your project tree. It could be somehting like this:

`rootPath: process.cwd() + '/public/docpad'`
