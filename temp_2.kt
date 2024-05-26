import calibre.opds.OPDSParser

fun main(args: Array<String>) {
    if (args.size < 3) {
        println("Usage: <server_url> <username> <password>")
        return
    }

    val serverUrl = args[0]
    val username = args[1]
    val password = args[2]

    val parser = OPDSParser(serverUrl, username, password)

    val libs = parser.parse()

    libs.forEach { lib ->
        println("Caching images for library ${lib.name}...")
        lib.cacheImages()

        println("Cleaning cache for library ${lib.name}...")
        lib.cleanCache()

        println("Library: ${lib.name}")
        lib.seriesList.forEach { series ->
            println("  Series: ${series.name}")
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
