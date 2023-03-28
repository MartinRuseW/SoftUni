function theArchitect(input) {
    let name = input[0];
    let numberOfProjects = input[1];
    let requiredHours = 3 * numberOfProjects;
    console.log(`The architect ${name} will need ${requiredHours} hours to complete ${numberOfProjects} projects.`)
}
theArchitect([`George`, 4]);