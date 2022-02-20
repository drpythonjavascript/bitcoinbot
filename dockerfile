FROM node:alpine
WORKDIR /app
#copy ALL the files from this parent directory to /app which will already be in the node.alpin image directory.
#every image on docker has an inherent file system. we can create a folder in there by indication /desired_folder_name
# the period . simply means we are copy all the files from this parent directory. 
# /app is the name of the directory we create in the filesystem of our image
# we will now have a copy off the files in this directory (source) within our destination so we can directly refrence them there now. 
COPY . .

#CMD represent a command we would like run after our image is built. 
CMD node index.js

# *****however when we use WORKDIR after COPY instruction then we don't have reference the abs path of the the file
# WORKDIR allows us enter CMD node index.js
# WORKDIR instruction will default our WORKING directory to the one we specified so that we have less verbosity later on. 
