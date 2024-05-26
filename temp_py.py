'''import webpub_manifest_parser

# Load the OPDS feed
opds_feed = webpub_manifest_parser.load('path/to/opds/feed.opds')

# Parse the OPDS feed
parsed_feed = opds_feed.parse()

# Extract metadata from the parsed feed
title = parsed_feed.get('title')
author = parsed_feed.get('author')
publication_date = parsed_feed.get('publication_date')

print(title)
print(author)
print(publication_date)'''
import xml.etree.ElementTree as ET

# Load the OPDS feed
tree = ET.parse('cops.xml')
root = tree.getroot()

# Extract metadata from the parsed feed
title = root.find('.//All books')
author = root.find('.//author')
publication_date = root.find('.//published')

print(title)
print(author)
print(publication_date)