var documenterSearchIndex = {"docs":
[{"location":"#SPICEApplications.jl","page":"SPICEApplications.jl","title":"SPICEApplications.jl","text":"","category":"section"},{"location":"","page":"SPICEApplications.jl","title":"SPICEApplications.jl","text":"All SPICE Utility programs!","category":"page"},{"location":"","page":"SPICEApplications.jl","title":"SPICEApplications.jl","text":"warning: Warning\nMore documentation will come, but for now, SPICEApplications only has humble docstrings! For more information, take a look at the project's GitHub repository. There, and in docstrings, you'll find a recurring warning which is reiterated here: this project is not affiliated with or endorsed by NASA, JPL, Caltech, or any other organization!","category":"page"},{"location":"docstrings/#Reference","page":"Reference","title":"Reference","text":"","category":"section"},{"location":"docstrings/","page":"Reference","title":"Reference","text":"All docstrings!","category":"page"},{"location":"docstrings/","page":"Reference","title":"Reference","text":"Modules = [\n    SPICEApplications,\n]\nOrder = [:module, :type, :function, :constant]","category":"page"},{"location":"docstrings/#SPICEApplications.SPICEApplications","page":"Reference","title":"SPICEApplications.SPICEApplications","text":"Call all SPICE Utilities from within Julia!\n\nwarning: Warning\nThis package is not affiliated with or endorsed by NASA, JPL, Caltech, or any other organization! This is an independently written package by an astrodynamics hobbyist.\n\nExtended help\n\nREADME\n\n(Image: Tests) (Image: Docs) (Image: SciML Code Style)\n\nSPICEApplications\n\nGenerate ephemeris kernel files using NASA JPL's SPICEApplications program, all from within Julia!\n\nPlease consider all minor changes breaking until v1.0!\n\nWarningThis package is not affiliated with or endorsed by NASA, JPL, Caltech, or any other organization! This is an independently written package by an astrodynamics hobbyist.\n\nInstallation\n\nChoose one of the following two lines!\n\nimport Pkg; Pkg.add(\"SPICEApplications\");\n\n]add SPICEApplications # in Julia's REPL\n\nCredits\n\nNASA JPL developed and maintains the NAIF SPICE Toolkit, including SPICEApplications. Helge Eichhorn developed and maintains SPICE.jl, as well as the Julia wrappers around the SPICE Toolkit.\n\nLicense\n\nMIT License\n\nCopyright (c) 2023 Joe Carpinelli\n\nPermission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the \"Software\"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n\nExports\n\nbrief\nchronos\nckbrief\ncommnt\ndskbrief\ndskexp\nfrmdiff\ninspekt\nmkdsk\nmkspk\nmsopck\nsimple\nspacit\nspkdiff\nspkmerge\nstates\nsubpt\ntictoc\ntobin\ntoxfr\nversion\n\nImports\n\nBase\nCore\nDocStringExtensions\n\n\n\n\n\n","category":"module"},{"location":"docstrings/#SPICEApplications.brief-Tuple{Vararg{AbstractString}}","page":"Reference","title":"SPICEApplications.brief","text":"brief(\n    file;\n    tabular,\n    single,\n    centers,\n    utc,\n    utcdoy,\n    etsec,\n    sec,\n    min,\n    hour,\n    day,\n    bytime,\n    bycoverage,\n    byid,\n    byname,\n    body,\n    center,\n    at,\n    from,\n    to,\n    listfile,\n    help,\n    version\n)\n\n\nBRIEF is a command-line utility program that displays a contents and time coverage summary for one or more binary SPK or binary PCK files.\n\nExtended Help\n\nwarning: Warning\nAll descriptions below were manually parsed from the commandline program's help/usage output.\n\nArgument Equivalent Description\ntabular -t Display summary in a tabular format\nsingle -a Treat all files as a single file\ncenters -c Displays centers of motion/relative-to frames\nutc -utc Display times in UTC calendar date format (needs LSK)\nutcdoy -utcdoy Display times in UTC day-of-year format (needs LSK)\netsec -etsec Display times as ET seconds past J2000\nsec -sec Display times \"rounded inward\" to second\nmin -min Display times \"rounded inward\" to minute\nhour -hour Display times \"rounded inward\" to hour\nday -day Display times \"rounded inward\" to day\nbytime -s Display summary sorted by start time for each body/frame\nbycoverage -g Display summary grouped by coverage\nbyid -n Display bodies/frames using numeric id-codes\nbyname -o Display summary ordered by body/frame name\nbody -sb[bod] Display summary for body [bod]\ncenter -sc[cen] Display summary for center of motion/relative-to frame [cen]\nat -at [time] Display summary if coverage contains epoch [time]\nfrom -from [beg] Display summary if coverage contains interval [beg]:[end]\nto -to [end] Display summary if coverage contains interval [beg]:[end]\nlistfile -f [list] Summarize kernels listed in the [list] file\nhelp -h Display help\nversion -v Display version\n\n\n\n\n\n","category":"method"},{"location":"docstrings/#SPICEApplications.chronos-Tuple{Vararg{AbstractString}}","page":"Reference","title":"SPICEApplications.chronos","text":"chronos(\n    file;\n    from,\n    fromtype,\n    to,\n    totype,\n    format,\n    time,\n    sc,\n    center,\n    landingtime,\n    sol1index,\n    nolabel,\n    trace,\n    help,\n    usage,\n    template\n)\n\n\nCHRONOS is a command-line program that converts between several time systems and time formats.\n\nExtended Help\n\nwarning: Warning\nAll descriptions below were manually parsed from the commandline program's help/usage output.\n\nArgument Equivalent Description\nfrom -FROM <\"from\" time system> \"from\" time system\nfromtype -FROMTYPE <\"from\" time system type> \"from\" time system type\nto -TO <\"to\" time system> \"to\" time system\ntotype -TOTYPE <\"to\" time system type> \"to\" time system  type\nformat -FORMAT <output time format picture> output time format picture\ntime -TIME <input time> intput time\nsc -SC <sc ID> sc ID\ncenter -CENTER <cental body ID> cental body ID\nlandingtime -LANDINGTIME <UTC time of the landing> UTC time of the landing\nsol1index -SOL1INDEX <index of the first SOL> index of the first SOL\nnolabel -NOLABEL \ntrace -TRACE \nhelp -HELP display help\nusage -USAGE display usage\ntemplate -TEMPLATE display setup file template\n\n\n\n\n\n","category":"method"},{"location":"docstrings/#SPICEApplications.ckbrief-Tuple{Vararg{AbstractString}}","page":"Reference","title":"SPICEApplications.ckbrief","text":"ckbrief(\n    files;\n    dump,\n    boundaries,\n    relframes,\n    idframes,\n    tabular,\n    single,\n    bycoverage,\n    utc,\n    utcdoy,\n    sclk,\n    dpsclk,\n    id,\n    summarize,\n    help,\n    version\n)\n\n\nCKBRIEF is a command-line utility program that displays a contents and time coverage summary for one or more binary CK files.\n\nExtended Help\n\nwarning: Warning\nAll descriptions below were manually parsed from the commandline program's help/usage output.\n\nArgument Equivalent Description\ndump -dump display interpolation intervals boundaries\nboundaries -nm display segment boundaries\nrelframes -rel display relative-to frames\nidframes -n display frames associated with structure IDs\ntabular -t display summary in a tabular format\nsingle -a treat all files as a single file\nbycoverage -g display summary grouped by coverage\nutc -utc display times in UTC calendar date format\nutcdoy -utcdoy display times in UTC day-of-year format\nsclk -sclk display times as SCLK strings\ndpsclk -dpsclk display times as SCLK ticks\nid [ID] display summmary for structure with [ID]\nsummarize -f summarize kernels listed in the [list] file\nhelp -h display help\nversion -v display version\n\n\n\n\n\n","category":"method"},{"location":"docstrings/#SPICEApplications.commnt-Tuple{AbstractString, AbstractString}","page":"Reference","title":"SPICEApplications.commnt","text":"commnt(\n    kernelfile,\n    commentfile;\n    append,\n    extract,\n    read,\n    delete,\n    help\n)\n\n\nCOMMNT is a command-line program that reads, adds, extracts, or deletes comments from SPICE binary kernel files.\n\nExtended Help\n\nwarning: Warning\nAll descriptions below were manually parsed from the commandline program's help/usage output.\n\nArgument Equivalent Description\nappend -a add comments to binary kernel\nextract -e extract comments from a binary kernel\nread -r read the comments in a binary kernel\ndelete -d delete the comments from the binary kernel\nhelp -h display the help message\n\n\n\n\n\n","category":"method"},{"location":"docstrings/#SPICEApplications.dskbrief-Tuple{Vararg{AbstractString}}","page":"Reference","title":"SPICEApplications.dskbrief","text":"dskbrief(\n    file;\n    single,\n    gaps,\n    extended,\n    timebounds,\n    bysegment,\n    full,\n    sigdigs,\n    version,\n    help,\n    usage\n)\n\n\nDSKBRIEF is a command-line utility program that displays a summary of the spatial coverage and additional attributes of one or more binary Digital Shape Kernel (DSK) files.\n\nExtended Help\n\nwarning: Warning\nAll descriptions below were manually parsed from the commandline program's help/usage output.\n\nArgument Equivalent Description\nsingle -a treat all DSK files as a single file\ngaps -gaps display coverage gaps (aplies only when -a is used)\nextended -ext display extended summaries: these include data type, data class, and time bounds\ntimebounds -tg require segment time bounds to match when grouping segments\nfull -full display a detailed summary for each segment, including data-type-specific parameters\nsigdigs -d <n> display n significant digits of floating point values\nversion -v display the version of the program\nhelp -h display help text\nusage -u display usage text\n\n\n\n\n\n","category":"method"},{"location":"docstrings/#SPICEApplications.dskexp-Tuple{}","page":"Reference","title":"SPICEApplications.dskexp","text":"dskexp(; dsk, text, format, precision)\n\n\nDSKEXP is a command-line program that exports data from DSK files to text files.\n\nExtended Help\n\nwarning: Warning\nAll descriptions below were manually parsed from the commandline program's help/usage output.\n\nArgument Equivalent Description\ndsk -dsk <dsk> DSK kernel\ntext -text <output name> output name\nformat -format <MKDSK format code/name> MKSDK format code/name\nprecision -prec <# of vertex mantissa digits (1:17) number of vertex mantissa digits\n\n\n\n\n\n","category":"method"},{"location":"docstrings/#SPICEApplications.frmdiff-Tuple{}","page":"Reference","title":"SPICEApplications.frmdiff","text":"frmdiff(\n;\n    kernels,\n    from1,\n    to1,\n    frame1,\n    supporting_kernels1,\n    from2,\n    to2,\n    frame2,\n    supporting_kernels2,\n    angular,\n    angularframe,\n    start,\n    stop,\n    numpoints,\n    timestep,\n    timeformat,\n    report,\n    rotation,\n    units,\n    sigdigs\n)\n\n\nFRMDIFF is a program that samples orientation of a reference frame known to SPICE or computes differences between orientations of two reference frames known to SPICE, and either displays this orientation or these differences, or shows statistics about it or them.\n\nExtended Help\n\nwarning: Warning\nAll descriptions below were manually parsed from the commandline program's help/usage output.\n\nArgument Equivalent Description\nkernels -k  <supporting kernel(s) name(s)> supporting kernel(s) name(s)>\nfrom1 -f1 <firstfrom'' frame, name or ID> first \"from\" frame, name or ID\nto1 -t1 <firstto'' frame, name or ID> first \"to\" frame, name or ID\nframe1 -c1 <first frame for coverage look up, name or ID> first frame for coverage look up, name or ID\nsupporting_kernels1 -k1 <additional supporting kernel(s) for first file> additional supporting kernel(s) for first file\nfrom2 -f2 <secondfrom'' frame, name or ID> second \"from\" frame, name or ID\nto2 -t2 <secondto'' frame, name or ID> second \"to\" frame, name or ID\nframe2 -c2 <second frame for coverage look up, name or ID> second frame for coverage look up, name or ID\nsupporting_kernels2 -k2 <additional supporting kernel(s) for second file> additional supporting kernel(s) for second file\nangular -a  <compare angular velocities: yes│no (default: no)> compare angular velocities\nangularframe -m  <frame for angular velocities: from│to (default: from)> frame for angular velocities\nstart -b  <interval start time> interval start time\nstop -e  <interval stop time> interval stop time\nnumpoints -n  <number of points: 1 to 1000000 (default: 1000)> number of points\ntimestep -s  <time step in seconds> time step in seconds\ntimeformat -f  <time format: et│sclk│sclkd│ticks│picture_for_TIMOUT (default: et)> time format\nreport -t  <report: basic│stats│dumpaa│dumpm│dumpqs│dumpqo│dumpea│dumpc│dumpg> report\nrotation -o  <rotation axes order (default: z y x)> rotation axes order\nunits -x  <units for output angles> (only for -t dumpaa and -t dumpea) units for output angles\nsigdigs -d  <number of significant digits: 6 to 17 (default: 14)> number of significant digits\n\n\n\n\n\n","category":"method"},{"location":"docstrings/#SPICEApplications.inspekt-Tuple{}","page":"Reference","title":"SPICEApplications.inspekt","text":"inspekt()\n\n\nINSPEKT is an interactive program that examines the contents of an events component (ESQ) of an E-kernel.\n\n\n\n\n\n","category":"method"},{"location":"docstrings/#SPICEApplications.mkdsk-Tuple{}","page":"Reference","title":"SPICEApplications.mkdsk","text":"mkdsk(\n;\n    setup,\n    input,\n    output,\n    help,\n    template,\n    usage,\n    version\n)\n\n\nMKDSK is a utility program that creates a SPICE Digital Shape Kernel (DSK) file from a text file containing shape data for an extended object.\n\nExtended Help\n\nwarning: Warning\nAll descriptions below were manually parsed from the commandline program's help/usage output.\n\nArgument Equivalent Description\nsetup -setup <setup file name> setup file name\ninput -input <input shape data file name> input shape data file name\noutput -output <output DSK file name> output DSK file name\nhelp -h│-help display help\ntemplate -t│-template display template\nusage -u│-usage display usage\nversion -v│-version display version\n\n\n\n\n\n","category":"method"},{"location":"docstrings/#SPICEApplications.mkspk-Tuple{}","page":"Reference","title":"SPICEApplications.mkspk","text":"mkspk(; setup, input, output, append, usage, help, template)\n\n\nMKSPK is a program that creates an SPK file from a text file containing trajectory information.\n\nExtended Help\n\nwarning: Warning\nAll descriptions below were manually parsed from the commandline program's help/usage output.\n\nArgument Equivalent Description\nsetup -setup <setup file name> setup file name\ninput -input <input shape data file name> input shape data file name\noutput -output <output DSK file name> output DSK file name\nappend -append append; output file must be new\nhelp -h│-help display help\ntemplate -t│-template display template\nusage -u│-usage display usage\n\n\n\n\n\n","category":"method"},{"location":"docstrings/#SPICEApplications.msopck-Tuple{}","page":"Reference","title":"SPICEApplications.msopck","text":"msopck(; setup, input, output)\n\n\nMSOPCK is a command-line program that converts attitude data provided in a text file as UTC, SCLK, or ET-tagged quaternions, Euler angles, or matrices, optionally accompanied by angular velocities, into a type 1, 2, or 3 SPICE C-kernel.\n\n\n\n\n\n","category":"method"},{"location":"docstrings/#SPICEApplications.spacit-Tuple{}","page":"Reference","title":"SPICEApplications.spacit","text":"spacit()\n\n\nSPACIT is an interactive program that converts kernels in transfer format to binary format, converts binary kernels to transfer format, and summarizes the contents of binary kernels.\n\n\n\n\n\n","category":"method"},{"location":"docstrings/#SPICEApplications.spkdiff-Tuple{}","page":"Reference","title":"SPICEApplications.spkdiff","text":"spkdiff(\n;\n    kernels,\n    body1,\n    center1,\n    frame1,\n    supporting_kernels1,\n    body2,\n    center2,\n    frame2,\n    supporting_kernels2,\n    start,\n    stop,\n    timestep,\n    numstates,\n    timeformat,\n    sigdigs,\n    report\n)\n\n\nSPKDIFF provides means for comparing the trajectories of two bodies or sampling the trajectory of a single body using data from SPICE kernels.\n\nExtended Help\n\nwarning: Warning\nAll descriptions below were manually parsed from the commandline program's help/usage output.\n\nArgument Equivalent Description\nkernels -k  <supporting kernel(s) name(s)> -k  <supporting kernel(s) name(s)>\nbody1 -b1 <first body name or ID> -b1 <first body name or ID>\ncenter1 -c1 <first center name or ID> -c1 <first center name or ID>\nframe1 -r1 <first reference frame name> -r1 <first reference frame name>\nsupporting_kernels1 -k1 <additional supporting kernel(s) for first SPK> -k1 <additional supporting kernel(s) for first SPK>\nbody2 -b2 <second body name or ID> -b2 <second body name or ID>\ncenter2 -c2 <second center name or ID> -c2 <second center name or ID>\nframe2 -r2 <second reference frame name> -r2 <second reference frame name>\nsupporting_kernels2 -k2 <additional supporting kernel(s) for second SPK> -k2 <additional supporting kernel(s) for second SPK>\nstart -b  <interval start time> -b  <interval start time>\nstop -e  <interval stop time> -e  <interval stop time>\ntimestep -s  <time step in seconds> -s  <time step in seconds>\nnumstates -n  <number of states: 2 to 1000000 (default: 1000)> -n  <number of states: 2 to 1000000 (default: 1000)>\ntimeformat -f  <output time format (default: TDB seconds past J2000)> -f  <output time format (default: TDB seconds past J2000)>\n`sigdigs1 -d  <number of significant digits: 6 to 17 (default: 14)> -d  <number of significant digits: 6 to 17 (default: 14)>\nreport -t  <report type: basic│stats│dump│dumpvf│dumpc│dumpg (def.: basic│dump)> -t  <report type: basic│stats│dump│dumpvf│dumpc│dumpg (def.: basic│dump)>\n\n\n\n\n\n","category":"method"},{"location":"docstrings/#SPICEApplications.spkmerge","page":"Reference","title":"SPICEApplications.spkmerge","text":"spkmerge()\nspkmerge(commandfile)\n\n\nSPKMERGE is a program that subsets or merges one or more SPK files into a single SPK file.\n\n\n\n\n\n","category":"function"},{"location":"docstrings/#SPICEApplications.tobin","page":"Reference","title":"SPICEApplications.tobin","text":"tobin()\ntobin(kernelfile)\n\n\nTOBIN is a command-line program that converts transfer format SPK, CK, PCK, DSK and EK files to binary format.\n\n\n\n\n\n","category":"function"},{"location":"docstrings/#SPICEApplications.toxfr","page":"Reference","title":"SPICEApplications.toxfr","text":"toxfr()\ntoxfr(kernelfile)\n\n\nTOXFR is a command-line program that converts binary format SPK, CK, PCK, DSK and EK files to transfer format.\n\n\n\n\n\n","category":"function"}]
}
