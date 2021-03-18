export const executeCopy = function(input) {
    let copyhelper = document.createElement("input");
    copyhelper.className = 'copyhelper'
    document.body.appendChild(copyhelper);
    copyhelper.value = input;
    copyhelper.select();
    document.execCommand("copy");
    document.body.removeChild(copyhelper);
};