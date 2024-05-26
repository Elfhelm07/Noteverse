import calibre.opds.parser.master

fun main(args: Array<String>) {
    args[0] = "http://192.168.1.3:8084/"
    args[1] = "admin"
    args[2] = "admin123"
    val parser = OPDSParser(args[0], args[1], args[2])

    val libs = parser.parse()

    libs.forEach { lib ->
        println("Caching images...")
        lib.cacheImages()

        println("Cleaning cache...")
        lib.cleanCache()

        println(lib.name)
        lib.seriesList.forEach { series ->
            println("  ${series.name}")
            series.entries.forEach { entry ->
                println("    ${entry.title}")
                entry.acquisitions.forEach { acquisition ->
                    println("      @ ${lib.getAcquisitionURL(acquisition)}")
                    if (entry.title == "Some Book Title") {
                        lib.downloadAcquisition(series, entry, acquisition)
                    }
                }
            }
        }
    }
}
