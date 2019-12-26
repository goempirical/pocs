

var client = contentful.createClient({
    space: '6epsahbf6s2d',
    accessToken: '8HbapqsRucrkh3AH7MwyNgxnmntcNRt8Ir5P_Zh7ysU'
  })

// client.sync({initial: true})
// .then((response) => {
//   console.log(response.entries)
//   for(var vehicle of response.entries){
//       console.log(vehicle.fields.make)
//   }
//   console.log(response.assets)
// })

client.getEntries({content_type: "dealer"})
.then((response) => {
    console.group("Dealers:")
  for(var dealer of response.items){
      console.log(dealer.fields.name)
  }
  console.groupEnd();
})

client.getEntries({content_type: "vehicle"})
.then((response) => {
    //console.table(response.items)
    console.group("Vehicles");
  for(var vehicle of response.items){
      console.log(vehicle.fields.make)
  }
  console.groupEnd();
})

client.getLocales()
.then((response) => {
    console.group("Locales")
    for(var locales of response.items){
        console.log(locales.name)
    }
    console.groupEnd();
})