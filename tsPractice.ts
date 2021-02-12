
let arrayOfShows:Array<Show> = [
  {
    title: "African darter",
    capacity: 334,
    performers: 8,
    popcornAvailable: false,
    kind: "concert" as const,
    price: "free",
    instruments: 8
  },
  {
    title: "Rufous-collared sparrow",
    capacity: 52,
    performers: 9,
    popcornAvailable: true,
    kind: "circus" as const,
    stunts: 90,
    price: 35
  },
  {
    title: "Hyena, brown",
    capacity: 566,
    performers: 4,
    popcornAvailable: false,
    kind: "circus" as const,
    stunts: 90,
    price: 35
  },
  {
    title: "Duck, white-faced whistling",
    capacity: 68,
    performers: 4,
    popcornAvailable: true,
    kind: "comedy" as const,
    price: 10,
    jokes: 34
  },
  {
    title: "Goldeneye, barrows",
    capacity: 420,
    performers: 6,
    popcornAvailable: false,
    kind: "comedy" as const,
    price: 10,
    jokes: 34
  },
  {
    title: "Defassa waterbuck",
    capacity: 321,
    performers: 6,
    popcornAvailable: true,
    kind: "circus" as const,
    stunts: 90,
    price: 35
  },
  {
    title: "Wallaby, red-necked",
    capacity: 494,
    performers: 2,
    popcornAvailable: false,
    kind: "circus" as const,
    stunts: 90,
    price: 35
  },
  {
    title: "Brazilian otter",
    capacity: 93,
    performers: 5,
    popcornAvailable: false,
    kind: "comedy" as const,
    price: 10,
    jokes: 34
  },
  {
    title: "Jungle cat",
    capacity: 137,
    performers: 10,
    popcornAvailable: true,
    kind: "comedy" as const,
    price: 10,
    jokes: 34
  },
  {
    title: "Macaque, japanese",
    capacity: 89,
    performers: 5,
    popcornAvailable: true,
    kind: "comedy" as const,
    price: 10,
    jokes: 34
  },
  {
    title: "Cormorant, pied",
    capacity: 272,
    performers: 7,
    popcornAvailable: false,
    kind: "comedy" as const,
    price: 10,
    jokes: 34
  },
  {
    title: "Crane, black-crowned",
    capacity: 545,
    performers: 4,
    popcornAvailable: true,
    kind: "concert" as const,
    price: "free",
    instruments: 6
  },
  {
    title: "Pronghorn",
    capacity: 514,
    performers: 4,
    popcornAvailable: false,
    kind: "comedy" as const,
    price: 10,
    jokes: 34
  },
  {
    title: "Wood pigeon",
    capacity: 252,
    performers: 2,
    popcornAvailable: true,
    kind: "comedy" as const,
    price: 10,
    jokes: 34
  },
  {
    title: "Red-billed buffalo weaver",
    capacity: 177,
    performers: 2,
    popcornAvailable: true,
    kind: "comedy" as const,
    price: 10,
    jokes: 34
  },
  {
    title: "Eagle, african fish",
    capacity: 390,
    performers: 5,
    popcornAvailable: false,
    kind: "circus" as const,
    stunts: 90,
    price: 35
  },
  {
    title: "Kite, black",
    capacity: 142,
    performers: 8,
    popcornAvailable: true,
    kind: "concert" as const,
    price: "free",
    instruments: 3
  },
  {
    title: "Insect, stick",
    capacity: 363,
    performers: 4,
    popcornAvailable: false,
    kind: "circus" as const,
    stunts: 90,
    price: 35
  },
  {
    title: "Ringtail, common",
    capacity: 490,
    performers: 1,
    popcornAvailable: false,
    kind: "comedy" as const,
    price: 10,
    jokes: 34
  },
  {
    title: "Stick insect",
    capacity: 354,
    performers: 8,
    popcornAvailable: false,
    kind: "comedy" as const,
    price: 10,
    jokes: 34
  }]




type ShowBaseType = {
  title: string,
  capacity: number,
  performers: number,
  popcornAvailable: boolean,
}

type Circus = ShowBaseType & {
  kind: "circus",
  stunts: number,
  price: number
}

type Comedy = ShowBaseType & {
  kind: "comedy",
  price: number,
  jokes: number
}

type Concert = ShowBaseType & {
  kind: "concert",
  price: string,
  instruments: number
}


//Example concert of type concert
const benEKing: Concert = {
  title: "Ben E King Classics",
  capacity: 200,
  performers: 4,
  popcornAvailable: false,
  kind: "concert" as const,
  price: "free",
  instruments: 8
}




// what is this doing, and why is it doing it? Why are we doing it?
type Show = Circus | Comedy | Concert
type ShowType = Show["kind"]

type ShowKeysOfShowBaseType = keyof ShowBaseType
type ShowKeysOfShow = keyof Show
type ShowKeysOfKind = keyof DynamicGroupedShows



//Control flow - Making sure we get the desired output regarless of input paramater.
const getShow = (show: unknown): string => {

  if (typeof show === 'number' && arrayOfShows.length > show) {
    const { title, capacity, performers } = arrayOfShows[show]
    // because we have to return a string, we need to access the street and city parameters on the object and combine them to return a string
    return `${title}, with ${capacity} capacity, and ${performers} performers`
  } else if (typeof show === "string") {
    // if the input was already a string, return it
    return show
  }
  // if the type is anything else, just return a default string because we don't know how to deal with other types
  return 'No show found or provided'
}

console.log('---')
console.log('get show', getShow("I don't know which show I am looking for"))
console.log('---')
console.log('get show', getShow(5))
console.log('---')
console.log('get show', getShow(true))
console.log('---')




// lookup types:

// start typing some quotation marks after case, and see the options that appear. This will show you all the different types that you can use.
const displayTypes = (showtype: ShowType): string => {
  switch (showtype) {
    case "circus":
      return "circus works"
    case "comedy":
      return "comedy works"
    case "concert":
      return "concert works"
  }
}
console.log(displayTypes("circus"))



// Make sure that the grouped const is assigned the type that it should correlate to

function gatherEvents(
  arrayOfShows: Show[]
): DynamicGroupedShows {
  const grouped: DynamicGroupedShows = {
    circus: [],
    comedy: [],
    concert: []
  };
  arrayOfShows.forEach(show => {
    grouped[show.kind].push(show)
  })
  return grouped
}

const groupedEvents = gatherEvents(arrayOfShows)

//this will loop over all the keys in showtype, and give an output for each. Dynamic mapping. creating a type without having to write them out
type DynamicGroupedShows = {
  [Kind in ShowType]: Show[];
}

// returns an array of just one specific type of show, filtered by the input type
const filteredShows = (shows: DynamicGroupedShows, type: keyof DynamicGroupedShows): Show[] => {
  const filteredShowList = shows[type]
  return filteredShowList.filter(show => show.kind === type)
}

console.log(filteredShows(groupedEvents, "circus"))

//********* ********** ********** *********** ************ ********* ******** */


export { }