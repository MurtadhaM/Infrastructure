#!/bin/env python3

# AUTHOR: Murtadha Marzouq 
"""
Converts the rules from the GRC rules file to the rules.yaml compatible with the chromaterm tool
Usage: python3 GRC_RULES_CONVERTER.py <filepath> <output_folder>
"""


import sys
import os
import argparse
import subprocess
import re
import random
import colorsys



# INPUT PARAMETERS: 
# 1. filepath to the file containing the list of files to be processed 
# 2. output folder

# RULE:
def rules_maker(description="empty", regexp="empty", colors="empty", count="empty", exclusive="false"):
    # RETURN A DICTIONARY
    return {"description": description, "regexp": regexp, "colors": colors, "count": count, "exclusive": exclusive}


rules = []

# READ THE FILE

def file_to_list(filepath):
    with open(filepath) as f:
        content = f.readlines()
    content = [x.strip() for x in content] 
    return content


# CREATE THE OUTPUT FOLDER
def create_output_folder(output_folder):
    if not os.path.exists(output_folder):
        os.makedirs(output_folder)
        print("Output folder created: " + output_folder)
    else:
        print("Output folder already exists: " + output_folder)
    return output_folder

# Process the file
def process_file(filepath, output_folder):
    """
RULES:
# FOR EACH LINE THAT STARTS WITH "#" ASSIGN TO "description"
# FOR EACH LINE THAT STARTS WITH "regexp=" ASSIGN TO "regexp"
# FOR EACH LINE THAT STARTS WITH "colors=" ASSIGN TO "colors" separated by space
# FOR EACH "........." or "=======" start a new rule

#EXAMPLE OUTPUT from:

# checking
regexp=\bchecking\s*(for|if|whether|command|how|that)?(\s*to)?\b
colors=bold blue
.........
# result is complex
regexp=\.\.\. .*$
colors=bold yellow
"
# IT SHOULD LOOK LIKE THIS:
- description: checking
  regexp: \bchecking\s*(for|if|whether|command|how|that)?(\s*to)?\b
  colors: bold blue
- description: result is complex
  regexp: \.\.\. .*$    
  colors: bold yellow
"""
    # VARIABLES
    description = ""
    regexp = ""
    colors = []
    count = ""
    
    # read the file
    content = file_to_list(filepath)
    # create the output file
    
    # create the output list
    output_list = []
    # create the output string
    output_string = ""
    # create the output dictionary
    output_dict = {}
    # create the output dictionary list
    output_dict_list = []
    
    ### FILE CLEANUP
    #RULES:
    # 1. REMOVE EMPTY LINES
    # 2. COMBINE MULTIPLE LINES THAT START WITH "#" INTO ONE LINE
    # 3. REMOVE ALL FROM THE BEGINNING OF THE FILE THE LINE BEFORE THE FIRST regexp= LINE
    
    try:
        for line in content:
            # if the line is empty
            if line == "":
                # remove it
                content.remove(line)
            # if the line starts with "#"
            elif line.startswith("#"):
                # if the line is not the first line
                if content.index(line) != 0:
                    # if the previous line starts with "#"
                    if content[content.index(line)-1].startswith("#"):
                        # combine the lines
                        content[content.index(line)-1] = content[content.index(line)-1] + " " + line
                        # remove the current line
                        content.remove(line)
            # if the line starts with "regexp="
            elif line.startswith("regexp="):
                # remove all from the beginning of the file the line before the first regexp= line
                content = content[content.index(line):]
                break
            else:
                print("ERROR: unknown line: " + line)
                content.remove(line)
    except Exception as e:
        print("ERROR: " + str(e))
        sys.exit(1)
    
    print("CLEANED UP FILE:")
    print(content)
    
    try:
        
        
        # for each line in the file
        for line in content:
            # if the line starts with "#"
            if line.startswith("#"):
                                # VARIABLE #
                output_dict["description"] = line[1:].strip()
                description = line[1:].strip()
            # if the line starts with "regexp="
            elif line.startswith("regexp="):
                # assign to "regexp"
                output_dict["regexp"] = line[7:].strip()
                # VARIABLE #
                regexp = line[7:].strip()
            # if the line starts with "colors="
            elif line.startswith("colours=") or line.startswith("colour="):
                # assign to "colours"
                # REMOVE THE "colour=" from the line
                # VARIABLE #
                line = re.sub(r"^colours=", "", line)
                line = re.sub(r"^colour=", "", line)
                output_dict["colors"] = line.strip().split(" ")
                # VARIABLE #
                colors = line.strip().split(" ")
                print(output_dict)
            # IF THE LINE STARTS WITH "count="  ADD exclusive: true
            elif line.startswith("count="):
                output_dict["exclusive"] = True
                # assign to "count"
                output_dict["count"] = line[6:].strip()
                # VARIABLE #
                count = line[6:].strip()
                
            # if the line starts with "........."
            elif line.startswith(".........") or line.startswith("=======") or line.startswith("-") or line.startswith("======"):
                my_rule = rules_maker(description, regexp, colors, count)
                print("NEW RULE")
                print(my_rule)
                # append the dictionary list to the list
                output_list.append(output_dict_list)
                rules.append(my_rule)
                # reset the dictionary list
                output_dict_list = []

            else:
                print("ERROR: unknown line: " + line)
    except Exception as e:
        print("ERROR: " + str(e))
        sys.exit(1)
    
    # PRINT THE RULES
    print("RULES:")
    print(rules)
    print("WRITING THE RULES TO THE FILE")
    filewriter(output_folder, rules)
    return output_folder + "/rules.yaml"

    

def replace_colors(colors):
    new_colors=[]
    for color in colors:
        new_colors.append(colorsys.hsv_to_rgb(random.random(), 1, 1))
        # convert to HEX
        new_colors[-1] = '#%02x%02x%02x' % (int(new_colors[-1][0]*255), int(new_colors[-1][1]*255), int(new_colors[-1][2]*255))
    return new_colors


def filewriter(filepath, content):
    """
  - description: Numbers
    regex: \b(?<!\.)\d
    #optional values
    exclusive: true
    """
    # DEFINE THE FINAL OUTPUT STRING
    FINAL_OUTPUT_STRING = ""
    # FOR EACH RULE IN THE LIST
    for rule in rules:
        output_string = "- description: " + rule["description"] + "\n"
        output_string += "  regex: " + rule["regexp"] + "\n"
        # IF THE COLORS LIST IS ONLY ONE COLOUR
        rule["colors"] = replace_colors(rule["colors"])
        if len(rule["colors"]) == 1:
            # REPLACE THE COLOURS WITH THE COLOURS FROM THE COLOURS DICTIONARY
            
            
                    
            output_string += "  color: f" + rule["colors"][0] + "\n"
        else:
            # FOR EACH COLOUR IN THE LIST OF COLOURS IN THE RULE with index at the start like 0: red
            output_string += "  color:\n"   
            for index,colour in enumerate(rule["colors"]):
                # IF THE COLOUR IS THE FIRST COLOUR
                    output_string += "    " + str(index) + ": f" + colour + "\n"
                                        
            
            
            if rule["count"] == "more":
                output_string += "  exclusive: true" + "\n"
            output_string += "\n"
        print(output_string)
        # APPEND THE OUTPUT STRING TO THE FINAL OUTPUT STRING
        FINAL_OUTPUT_STRING += output_string
        # write the output string to the file  

    
    
    
    # open the output file
    f = open(filepath + "/rules.yaml", "w")
    # write the output list to the file
    f.write(str(FINAL_OUTPUT_STRING))
    # close the file
    f.close()
        
# MAIN
def main():
    # parse the arguments
    parser = argparse.ArgumentParser(description='Process the file')
    parser.add_argument('filepath', metavar='filepath', type=str, help='filepath to the file containing the list of files to be processed')
    parser.add_argument('output_folder', metavar='output_folder', type=str, help='output folder')
    args = parser.parse_args()
    # create the output folder
    output_folder = create_output_folder(args.output_folder)
    # process the file
    output_file = process_file(args.filepath, output_folder)
    print("Output file: " + output_file)
    # exit
    sys.exit(0)


main()