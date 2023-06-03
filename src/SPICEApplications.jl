"""
Call all SPICE Utilities from within Julia!

!!! warning
    This package is not affiliated with or endorsed by NASA, JPL, Caltech, or any
    other organization! This is an independently written package by an
    astrodynamics hobbyist.

# Extended help

## README

$(README)

## License
$(LICENSE)

## Exports
$(EXPORTS)

## Imports
$(IMPORTS)
"""
module SPICEApplications

export
    brief,
    chronos,
    ckbrief,
    commnt,
    simple,
    states,
    subpt,
    tictoc,
    dskbrief,
    dskexp,
    frmdiff,
    inspekt,
    mkdsk,
    mkspk,
    msopck,
    spacit,
    spkdiff,
    spkmerge,
    tobin,
    toxfr,
    version

using Tables
import CSPICE_jll

using DocStringExtensions
include("docstrings.jl")

"""
BRIEF is a command-line utility program that displays a contents and time coverage summary for one or more binary SPK or binary PCK files.

# Extended Help

!!! warning
    All descriptions below were manually parsed from the commandline program's help/usage output.

| Argument | Equivalent | Description | 
| :--- | :--- | :--- |
| `tabular` | `-t` | Display summary in a tabular format |
| `single` | `-a` | Treat all files as a single file | 
| `centers` | `-c` | Displays centers of motion/relative-to frames | 
| `utc` | `-utc` | Display times in UTC calendar date format (needs LSK) | 
| `utcdoy` | `-utcdoy` | Display times in UTC day-of-year format (needs LSK) |
| `etsec` | `-etsec` | Display times as ET seconds past J2000 | 
| `sec` | `-sec` | Display times "rounded inward" to second | 
| `min` | `-min` | Display times "rounded inward" to minute | 
| `hour` | `-hour` | Display times "rounded inward" to hour | 
| `day` | `-day` | Display times "rounded inward" to day | 
| `bytime` | `-s` | Display summary sorted by start time for each body/frame | 
| `bycoverage` | `-g` | Display summary grouped by coverage | 
| `byid` | `-n` | Display bodies/frames using numeric id-codes | 
| `byname` | `-o` | Display summary ordered by body/frame name | 
| `body` | `-sb[bod]` | Display summary for body [bod] |
| `center` | `-sc[cen]` | Display summary for center of motion/relative-to frame [cen] | 
| `at` | `-at [time]` | Display summary if coverage contains epoch [time] |
| `from` | `-from [beg]` | Display summary if coverage contains interval [beg]:[end] |
| `to` | `-to [end]` | Display summary if coverage contains interval [beg]:[end] |
| `listfile` | `-f [list]` | Summarize kernels listed in the [list] file | 
| `help` | `-h` | Display help | 
| `version` | `-v` | Display version| 
"""
function brief(
    file::AbstractString...;
    tabular=false, single=false, centers=false, utc=false, utcdoy=false, etsec=false,
    sec=false, min=false, hour=false, day=false, bytime=false, bycoverage=false,
    byid=false, byname=false, body=nothing, center=nothing, at=nothing, from=nothing,
    to=nothing, listfile=nothing, help=false, version=false
)

    args = String[]
    tabular && push!(args, "-t")
    single && push!(args, "-a")
    centers && push!(args, "-c")

    utc && push!(args, "-utc")
    utcdoy && push!(args, "-utcdoy")
    etsec && push!(args, "-etsec")
    sec && push!(args, "-sec")
    min && push!(args, "-min")
    hour && push!(args, "-hour")
    day && push!(args, "-day")

    bytime && push!(args, "-s")
    bycoverage && push!(args, "-g")
    byid && push!(args, "-n")
    byname && push!(args, "-o")

    !isnothing(body) && push!(args, "-sb$body")
    !isnothing(center) && push!(args, "-sc$center")
    !isnothing(at) && push!(args, "-at $at")
    !isnothing(from) && push!(args, "-from $from")
    !isnothing(to) && push!(args, "-to $to")
    !isnothing(listfile) && push!(args, "-f $listfile")

    help && push!(args, "-h")
    version && push!(args, "-v")

    args = join(args, " ")
    files = join(file, " ")
    cmd = `$(CSPICE_jll.brief()) $args $files`
    @debug cmd
    run(cmd)

    nothing
end


"""
CHRONOS is a command-line program that converts between several time systems and time formats.

# Extended Help

!!! warning
    All descriptions below were manually parsed from the commandline program's help/usage output.

| Argument | Equivalent | Description | 
| :--- | :--- | :--- |
| `from` | `-FROM <"from" time system>` | "from" time system |
| `fromtype` | `-FROMTYPE <"from" time system type>` | "from" time system type|
| `to` | `-TO <"to" time system>` | "to" time system |
| `totype` | `-TOTYPE <"to" time system type>` | "to" time system  type |
| `format` | `-FORMAT <output time format picture>` | output time format picture|
| `time` | `-TIME <input time>` | intput time|
| `sc` | `-SC <sc ID>` | sc ID|
| `center` | `-CENTER <cental body ID>` | cental body ID|
|`landingtime` | `-LANDINGTIME <UTC time of the landing>` | UTC time of the landing |
| `sol1index` | `-SOL1INDEX <index of the first SOL>` | index of the first SOL |
| `nolabel` | `-NOLABEL` | |
| `trace` | `-TRACE` | |
| `help` | `-HELP` | display help |
| `usage` | `-USAGE` | display usage |
| `template` | `-TEMPLATE` | display setup file template |
"""
function chronos(
    file::AbstractString...;
    from=nothing, fromtype=nothing, to=nothing, totype=nothing, format=nothing,
    time=nothing, sc=nothing, center=nothing, landingtime=nothing, sol1index=nothing,
    nolabel=false, trace=false, help=false, usage=false, template=false
)

    args = String[]

    !isnothing(from) && push!(args, "-FROM $from")
    !isnothing(fromtype) && push!(args, "-FROMTYPE $fromtype")
    !isnothing(to) && push!(args, "-TO $to")
    !isnothing(totype) && push!(args, "-TOTYPE $totype")
    !isnothing(format) && push!(args, "-FORMAT $format")
    !isnothing(time) && push!(args, "-TIME $time")
    !isnothing(sc) && push!(args, "-sc $sc")
    !isnothing(center) && push!(args, "-CENTER $center")
    !isnothing(landingtime) && push!(args, "-LANDINGTIME $landingtime")
    !isnothing(sol1index) && push!(args, "-SOL1INDEX $sol1index")
    nolabel && push!(args, "-NOLABEL")
    trace && push!(args, "-TRACE")
    help && push!(args, "-HELP")
    usage && push!(args, "-USAGE")
    template && push!(args, "-TEMPLATE")

    args = join(args, " ")
    files = join(file, " ")
    cmd = `$(CSPICE_jll.chronos()) $files $args`
    @debug cmd
    run(cmd)

    nothing
end


"""
CKBRIEF is a command-line utility program that displays a contents and time coverage summary for one or more binary CK files.
"""
function ckbrief(
    files::AbstractString...;
    dump=false,
    boundaries=false,
    relframes=false,
    idframes=false)

end


"""
COMMNT is a command-line program that reads, adds, extracts, or deletes comments from SPICE binary kernel files.
"""
function commnt() end


"""
DSKBRIEF is a command-line utility program that displays a summary of the spatial coverage and additional attributes of one or more binary Digital Shape Kernel (DSK) files.
"""
function dskbrief() end


"""
DSKEXP is a command-line program that exports data from DSK files to text files.
"""
function dskexp() end


"""
FRMDIFF is a program that samples orientation of a reference frame known to SPICE or computes differences between orientations of two reference frames known to SPICE, and either displays this orientation or these differences, or shows statistics about it or them.
"""
function frmdiff() end


"""
INSPEKT is an interactive program that examines the contents of an events component (ESQ) of an E-kernel.
"""
function inspekt() end


"""
MKDSK is a utility program that creates a SPICE Digital Shape Kernel (DSK) file from a text file containing shape data for an extended object.
"""
function mkdsk() end


"""
MKSPK is a program that creates an SPK file from a text file containing trajectory information.
"""
function mkspk(setup=nothing; input=nothing, output=nothing, append=false)

    args = String[]
    !isnothing(setup) && append!(args, ("-setup", String(setup)))
    !isnothing(input) && append!(args, ("-input", String(input)))
    !isnothing(output) && append!(args, ("-output", String(output)))
    append && push!(args, "-append")

    args = join(args, " ")
    cmd = `$(CSPICE_jll.mkspk()) $args`
    @debug cmd
    run(cmd)

    nothing
end


"""
MSOPCK is a command-line program that converts attitude data provided in a text file as UTC, SCLK, or ET-tagged quaternions, Euler angles, or matrices, optionally accompanied by angular velocities, into a type 1, 2, or 3 SPICE C-kernel.
"""
function msopck() end


"""
SPACIT is an interactive program that converts kernels in transfer format to binary format, converts binary kernels to transfer format, and summarizes the contents of binary kernels.
"""
function spacit() end


"""
SPKDIFF provides means for comparing the trajectories of two bodies or sampling the trajectory of a single body using data from SPICE kernels.
"""
function spkdiff() end


"""
SPKMERGE is a program that subsets or merges one or more SPK files into a single SPK file.
"""
function spkmerge() end


"""
TOBIN is a command-line program that converts transfer format SPK, CK, PCK, DSK and EK files to binary format.
"""
function tobin() end


"""
TOXFR is a command-line program that converts binary format SPK, CK, PCK, DSK and EK files to transfer format.
"""
function toxfr() end


end # module SPICEApplications
