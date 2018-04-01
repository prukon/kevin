

fixNames("the", "DALLAS", "CowBoys","1FeffdD")
function fixNames()
{
    var s = ""

    for (j = 0 ; j < fixNames.arguments.length ; ++j)
        s += fixNames.arguments[j].charAt(0).toUpperCase() +
        fixNames.arguments[j].substr(1).toLowerCase() + " "
        return document.write((s.substr(0, s.length-1)))
}