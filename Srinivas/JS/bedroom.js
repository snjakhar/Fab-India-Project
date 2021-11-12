var whatdata;
var second = document.getElementById("addToCartBtn");
var tables = [
  {
    sku: "10676805TT",
    name: "Sattva bedside",
    mrp: 8900,
    url1: "https://www.fabindia.com/ccstore/v1/images/?source=/file/v5940494863387963688/products/10676805TT.f.230421.jpg&height=940&width=940",
    url2: "https://www.fabindia.com/ccstore/v1/images/?source=/file/v5515099237563819349/products/10676805TT.b.230421.jpg&height=475&width=475",
    url3: "https://www.fabindia.com/ccstore/v1/images/?source=/file/v1432921583571287030/products/10676805TT.m.230421.jpg&height=475&width=475",
    size: "54cm x 40.5cm x 61cm",
    color: "b",
    detail: [
      "Bedside Table",
      "Primary Material-Mango Wood",
      "Secondary Material-MDF",
      "Type of Storage-Drawers",
      "No. of Drawers-1",
      "Size-54cm x 40.5cm x 61cm",
    ],
  },
  {
    sku: "10678522TT",
    name: "Nav Bunai Nesting Table",
    mrp: 14900,
    url1: "https://www.fabindia.com/ccstore/v1/images/?source=/file/v8441997816989547820/products/10678522TT.f.230421.jpg&height=940&width=940",
    url2: "https://www.fabindia.com/ccstore/v1/images/?source=/file/v4090067261801389046/products/10678522TT.b.230421.jpg&height=940&width=940",
    url3: "https://www.fabindia.com/ccstore/v1/images/?source=/file/v7315409490347651009/products/10678522TT.r.230421.jpg&height=475&width=475",
    size: "45cm x 34cm x 49cm",
    color: "b",
    detail: [
      "Nesting Table",
      "Primary Material-Mango Wood",
      "Secondary Material-Cane",
      "Type of Storage-Drawers",
      "Material of Leg Cap-Buffer",
      "Load Capacity-6kgs",
      "Moisture Content- 8-12%",
    ],
  },
  {
    sku: "10678641B",
    name: "Country Life Bedside Table",
    mrp: 9900,
    url1: "https://www.fabindia.com/ccstore/v1/images/?source=/file/v2004267892376742577/products/10678641BD.f.210421.jpg&height=940&width=940",
    url2: "https://www.fabindia.com/ccstore/v1/images/?source=/file/v8081991821076593337/products/10678641BD.l.210421.jpg&height=940&width=940",
    url3: "https://www.fabindia.com/ccstore/v1/images/?source=/file/v4796014558569885355/products/10678641BD.d.210421.jpg&height=940&width=940",
    size: "45cm x 35cm x 55cm",
    color: "b",
    detail: [
      "Bedside Table",
      "Primary Material-Mango Wood",
      "Secondary Material-MDF",
      "Type of Storage-Shelf & Drawers",
      "No. of Drawers-1",
      "Net Weight (in kgs)-14",
      "Moisture Content- 8-12%",
    ],
  },
  {
    sku: "10678744TT",
    name: "Sheesham Breakfast Table",
    mrp: 32900,
    url1: "https://www.fabindia.com/ccstore/v1/images/?source=/file/v6606016192575642633/products/10678744TT.f.230421.jpg&height=940&width=940",
    url2: "https://www.fabindia.com/ccstore/v1/images/?source=/file/v4529893760388732897/products/10678744TT.l.230421.jpg&height=940&width=940",
    url3: "https://www.fabindia.com/ccstore/v1/images/?source=/file/v5053829983263922916/products/10678744TT.b.230421.jpg&height=475&width=475",
    size: "61cm x 30cm x 24cm",
    color: "b",
    detail: [
      "Breakfast Table",
      "Primary Material-Mango Wood",
      "Secondary Material-MDF",
      "Foldable-Yes",
      "Net Weight (in kgs)-2.5",
      "With Storage-No",
      "Moisture Content- 8-12%",
    ],
  },
  {
    sku: "10682025TT",
    name: "Acacia Wood Khimser Bedside Table",
    mrp: 8400,
    url1: "https://www.fabindia.com/ccstore/v1/images/?source=/file/v5510408372314970461/products/10682025TT.f.210421.jpg&height=475&width=475",
    url2: "https://www.fabindia.com/ccstore/v1/images/?source=/file/v5510408372314970461/products/10682025TT.f.210421.jpg&height=940&width=940",
    url3: "https://www.fabindia.com/ccstore/v1/images/?source=/file/v5038623818664618575/products/10682025TT.b.210421.jpg&height=940&width=940",
    size: "40cm x 30cm x 55cm",
    color: "n",
    detail: [
      "Bedside Table",
      "Primary Material-Mango Wood",
      "Secondary Material-MDF",
      "Type of Storage-Drawers",
      "No. of Drawers-1",
      "Moisture Content- 8-12%",
      "Gross Weight (in kgs)-11",
      "Type of Storage-Drawers",
    ],
  },
  {
    sku: "10678767CB",
    name: "Nomad Bedside Table",
    mrp: 9900,
    url1: "https://www.fabindia.com/ccstore/v1/images/?source=/file/v2732582998380446081/products/10678767CB.f.230421.jpg&height=940&width=940",
    url2: "https://www.fabindia.com/ccstore/v1/images/?source=/file/v7533470935237853056/products/10678767CB.l.230421.jpg&height=475&width=475",
    url3: "https://www.fabindia.com/ccstore/v1/images/?source=/file/v6871879096270682244/products/10678767CB.b.230421.jpg&height=940&width=940",
    size: "55cm x 37cm x 45cm",
    color: "b",
    detail: [
      "Bedside Table",
      "Primary Material-Mango Wood",
      "Secondary Material-MDF",
      "Type of Storage-Drawers",
      "No. of Drawers-1",
      "Material of Leg Caps-Felt",
      "Moisture Content- 8-12%",
    ],
  },
  {
    sku: " 10681940TT ",
    name: "Kashi Bedside Table",
    mrp: 13900,
    url1: "https://www.fabindia.com/ccstore/v1/images/?source=/file/v2899672747883963320/products/10681940TT.f.210421.jpg&height=940&width=940",
    url2: "https://www.fabindia.com/ccstore/v1/images/?source=/file/v3054761493733589763/products/10681940TT.b.210421.jpg&height=940&width=940",
    url3: "https://www.fabindia.com/ccstore/v1/images/?source=/file/v1065818350188783367/products/10681940TT.m.210421.jpg&height=940&width=940",
    size: "68cm x 46cm x 58cm",
    color: "b",
    detail: [
      "Table",
      "Primary Material-Mango Wood",
      "Secondary Material-MDF",
      "Material of Leg Caps-Nylon buffer",
      "No. of Drawers-1",
      "Material of Leg Caps-Felt",
      "Moisture Content- 8-12%",
    ],
  },
  {
    sku: " 10672326TT ",
    name: "Quadro Bedside Table",
    mrp: 9900,
    url1: "https://www.fabindia.com/ccstore/v1/images/?source=/file/v614165386296334986/products/10672326TT.f.030221.jpg&height=940&width=940",
    url2: "https://www.fabindia.com/ccstore/v1/images/?source=/file/v900336639612140782/products/10672326TT.b.030221.jpg&height=475&width=475",
    url3: "https://www.fabindia.com/ccstore/v1/images/?source=/file/v3429816502273179992/products/10672326TT.m.030221.jpg&height=475&width=475",
    size: "2cm x 42cm x 42cm",
    color: "b",
    detail: [
      "Bedside Table",
      "Primary Material-Mango Wood",
      "Secondary Material-MDF",
      "Type of Storage-Drawers",
      "No. of Drawers-1",
      "Material of Leg Caps-Felt",
      "Moisture Content- 8-12%",
      "Gross Weight (in kgs)-14",
    ],
  },
  {
    sku: " 10682877TT ",
    name: "Desto Bedside Table",
    mrp: 6900,
    url1: "https://www.fabindia.com/ccstore/v1/images/?source=/file/v1750143670612644743/products/10682877TT.f.230421.jpg&height=940&width=940",
    url2: "https://www.fabindia.com/ccstore/v1/images/?source=/file/v7220037709314584310/products/10682877TT.b.230421.jpg&height=940&width=940",
    url3: "https://www.fabindia.com/ccstore/v1/images/?source=/file/v5629940116271435477/products/10682877TT.l.230421.jpg&height=475&width=475",
    size: "51cm x 41cm x 31cm",
    color: "b",
    detail: [
      "Bedside Table",
      "Primary Material-Mango Wood",
      "Secondary Material-MDF",
      "Type of Storage-Drawers",
      "No. of Drawers-1",
      "Material of Leg Caps-Felt",
      "Moisture Content- 8-12%",
      "Gross Weight (in kgs)-11",
    ],
  },
  {
    sku: " 10678765TB ",
    name: "Cara Bedside Table",
    mrp: 9900,
    url1: "https://www.fabindia.com/ccstore/v1/images/?source=/file/v7871099867724021997/products/10678765TB.f.210421.jpg&height=940&width=940",
    url2: "https://www.fabindia.com/ccstore/v1/images/?source=/file/v6715370486044906449/products/10678765TB.b.210421.jpg&height=940&width=940",
    url3: "https://www.fabindia.com/ccstore/v1/images/?source=/file/v5709840211776489769/products/10678765TB.m.210421.jpg&height=940&width=940",
    size: "55cm x 35cm x 45cm",
    color: "b",
    detail: [
      "Bedside Table",
      "Primary Material-Mango Wood",
      "Secondary Material-MDF",
      "Type of Storage-Drawers",
      "No. of Drawers-1",
      "Material of Leg Caps-Felt",
      "Moisture Content- 8-12%",
      "Gross Weight (in kgs)-18",
      "Assembly Required-Yes",
    ],
  },
];

var cabinets = [
  {
    sku: " 10691654DW ",
    name: "Ira Chest Of Drawer",
    mrp: 33500,
    url1: "https://www.fabindia.com/ccstore/v1/images/?source=/file/v8486569133254355255/products/10691654DW.f.171021.jpg&height=940&width=940",
    url2: "https://www.fabindia.com/ccstore/v1/images/?source=/file/v4142066957633451251/products/10691654DW.b.171021.jpg&height=475&width=475",
    url3: "https://www.fabindia.com/ccstore/v1/images/?source=/file/v16752864831923081/products/10691654DW.m.171021.jpg&height=475&width=475",
    size: "98cm X 50cm x 81cm",
    color: "b",
    detail: [
      "Chest of Drawer",
      "Carved",
      "Primary Material-Mango Wood",
      "Secondary Material-MDF",
      "Type of Storage-Drawers",
      "No. of Drawers-3",
      "Gross Weight (in kgs)-57",
      "Ground Clearance-8.5 cm",
      "Moisture Content- 8-12%",
      "Assembly Required-Yes",
    ],
  },
  {
    sku: " 10677939CB ",
    name: "Kashi Chest Of Drawers",
    mrp: 49900,
    url1: "https://www.fabindia.com/ccstore/v1/images/?source=/file/v5131796653940874051/products/10677939CB.f.210421.jpg&height=475&width=475",
    url2: "https://www.fabindia.com/ccstore/v1/images/?source=/file/v1104883646449947859/products/10677939CB.b.210421.jpg&height=475&width=475",
    url3: "https://www.fabindia.com/ccstore/v1/images/?source=/file/v1795977265531376740/products/10677939CB.d.210421.jpg&height=940&width=940",
    size: "1.52m x 45cm x 80cm",
    color: "b",
    detail: [
      "Cabinet",
      "Large",
      "Primary Material-Mango Wood",
      "Secondary Material-MDF",
      "Type of Storage-Drawers",
      "No. of Drawers-7",
      "Moisture Content- 8-12%",
      "Assembly Required-Yes",
      "Gross Weight (in kgs)-91.5",
    ],
  },
  {
    sku: " 10678543CB ",
    name: "Lotos Chest Of Drawers",
    mrp: 34900,
    url1: "https://www.fabindia.com/ccstore/v1/images/?source=/file/v8251260854236807837/products/10678543CB.f.230421.jpg&height=475&width=475",
    url2: "https://www.fabindia.com/ccstore/v1/images/?source=/file/v1243101037099379668/products/10678543CB.d.230421.jpg&height=940&width=940",
    url3: "https://www.fabindia.com/ccstore/v1/images/?source=/file/v36391198140892139/products/10678543CB.b.230421.jpg&height=940&width=940",
    size: "1.04m x 42cm x 80cm",
    color: "b",
    detail: [
      "Chest of Drawer",
      "Carved",
      "Primary Material-Mango Wood",
      "Secondary Material-MDF",
      "Type of Storage-Drawers",
      "No. of Drawers-3",
      "Gross Weight (in kgs)-39.3",
      "Moisture Content- 8-12%",
      "Assembly Required-Yes",
    ],
  },
  {
    sku: " 10680044DW ",
    name: "Bhram Cabinet",
    mrp: 54000,
    url1: "https://www.fabindia.com/ccstore/v1/images/?source=/file/v4526112553559704340/products/10680044DW.f.230421.jpg&height=940&width=940",
    url2: "https://www.fabindia.com/ccstore/v1/images/?source=/file/v4983022813190654461/products/10680044DW.d.230421.jpg&height=940&width=940",
    url3: "https://www.fabindia.com/ccstore/v1/images/?source=/file/v5883153555524528205/products/10680044DW.r.230421%20(2).jpg&height=940&width=940",
    size: "1m x 45cm x 1.46m",
    color: "b",
    detail: [
      "Cabinet",
      "Primary Material-Sheesham Wood",
      "Secondary Material-MDF",
      "Type of Storage-Drawers",
      "No. of Drawers-3",
      "Moisture Content- 8-12%",
      "Assembly Required-No",
    ],
  },
  {
    sku: " 10668389CB ",
    name: "Nav Bunai Chest Of Drawers",
    mrp: 25500,
    url1: "https://www.fabindia.com/ccstore/v1/images/?source=/file/v9097473067368781785/products/10668389CB.f.231020.jpg&height=475&width=475",
    url2: "https://www.fabindia.com/ccstore/v1/images/?source=/file/v5765288335025727451/products/10668389CB.d.231020.jpg&height=940&width=940",
    url3: "https://www.fabindia.com/ccstore/v1/images/?source=/file/v3601565200571943787/products/10668389CB.b.231020.jpg&height=475&width=475",
    size: "50cm x 35cm x 1m",
    color: "b",
    detail: [
      "Chest of Drawer",
      "Primary Material-Mango Wood",
      "Secondary Material-MDF",
      "Type of Storage-Drawers",
      "No. of Drawers-5",
      "Moisture Content- 8-12%",
      "Assembly Required-No",
    ],
  },
  {
    sku: " 10677205CB ",
    name: "Mosiac Sideboard",
    mrp: 27900,
    url1: "https://www.fabindia.com/ccstore/v1/images/?source=/file/v4876884831987505981/products/10677205CB.f.230421.jpg&height=940&width=940",
    url2: "https://www.fabindia.com/ccstore/v1/images/?source=/file/v4339535102239338208/products/10677205CB.b.230421.jpg&height=940&width=940",
    url3: "https://www.fabindia.com/ccstore/v1/images/?source=/file/v8620866232551288956/products/10677205CB.r.230421.jpg&height=940&width=940",
    size: "90cm x 45cm x 91cm",
    color: "b",
    detail: [
      "Cabinet",
      "Primary Material-Sheesham Wood",
      "Secondary Material-MDF",
      "With Open Shelf",
      "No. of Shelf-4",
      "No. of Drawers-3",
      "Moisture Content- 8-12%",
      "Assembly Required-No",
      "Gross Weight (in kgs)-53",
    ],
  },
  {
    sku: " 10601829CB ",
    name: "Obra Chest Of Drawer",
    mrp: 34900,
    url1: "https://www.fabindia.com/ccstore/v1/images/?source=/file/v7541201553295866018/products/10601829CB.f.18102019.jpg&height=940&width=940    ",
    url2: "https://www.fabindia.com/ccstore/v1/images/?source=/file/v4509335557111276413/products/10601829CB.b.18102019.jpg&height=475&width=475",
    url3: "https://www.fabindia.com/ccstore/v1/images/?source=/file/v4531399116365393993/products/10601829CB.l.18102019.jpg&height=475&width=475",
    size: "95cm x 45cm x 75cm",
    color: "n",
    detail: [
      "Sheesham Wood",
      "Type of Storage-Drawers",
      "No. of Drawers-1",
      "Assembly Required-Yes",
    ],
  },
];

var chair = [
  {
    sku: " 10669204CH ",
    name: "Sattva Rocking Chair",
    mrp: 40900,
    url1: "https://www.fabindia.com/ccstore/v1/images/?source=/file/v6908855460858007757/products/10669204CH.f.121020.jpg&height=940&width=940",
    url2: "https://www.fabindia.com/ccstore/v1/images/?source=/file/v826518431028167721/products/10669204CH.b.121020.jpg&height=475&width=475",
    url3: "https://www.fabindia.com/ccstore/v1/images/?source=/file/v3840397944882102897/products/10669204CH.r.121020.jpg&height=475&width=475",
    size: "64cm x 82cm x 91cm",
    color: "b",
    detail: [
      "Rocking Chair",
      "Primary Material-Sheesham Wood",
      "Secondary Material-Cane",
      "Type of Finish-Matte",
      "Gross Weight (in kgs)-16",
      "Size-64cm x 82cm x 91cm",
      "Moisture Content- 8-12%",
    ],
  },
];

var beds = [
  {
    sku: " 10677218BD",
    name: "Bunai Single Bed",
    mrp: 34900,
    url1: "https://www.fabindia.com/ccstore/v1/images/?source=/file/v5340541684886398677/products/10677218BD.f.210421.jpg&height=940&width=940",
    url2: "https://www.fabindia.com/ccstore/v1/images/?source=/file/v1698438359288846337/products/10677218BD.l.210421.jpg&height=940&width=940",
    url3: "https://www.fabindia.com/ccstore/v1/images/?source=/file/v6900954505461767169/products/10677218BD.r.210421.jpg&height=475&width=475",
    size: "99cm x 2.06m x 1m",
    color: "n",
    detail: [
      "Single Bed",
      "Ground Clearence-12cms",
      "Primary Material-Sheesham",
      "Material of Leg Caps-Felt",
      "Net Weight (in kgs)-35",
      "Moisture Content-8-12%",
      "Without Mattress",
      "Assembly Required-Yes",
    ],
  },
  {
    sku: " 10677221BD",
    name: "Chevron Queen Box Storage Bed",
    mrp: 69900,
    url1: "https://www.fabindia.com/ccstore/v1/images/?source=/file/v3274601796757816822/products/10677221BD.f.210421.jpg&height=475&width=475",
    url2: "https://www.fabindia.com/ccstore/v1/images/?source=/file/v563121843598266942/products/10677221BD.l.210421.jpg&height=475&width=475",
    url3: "https://www.fabindia.com/ccstore/v1/images/?source=/file/v4253314379093366535/products/10677221BD.r.210421.jpg&height=475&width=475",
    size: "1.6m x 2.09m x 1m",
    color: "b",
    detail: [
      "Queen Size Bed",
      "Secondary Material-Acacia Wood",
      "Seating Height-36.5 cms",
      "Net Weight (in kgs)-112",
      "Load Capacity-200 kgs",
      "Moisture Content-8-12%",
      "Without Mattress",
      "Assembly Required-Yes",
    ],
  },
  {
    sku: " 10678116BD",
    name: "Chevron Queen Hydraulic Bed",
    mrp: 84900,
    url1: "https://www.fabindia.com/ccstore/v1/images/?source=/file/v6954526361385576417/products/10678116BD.f.210421.jpg&height=475&width=475",
    url2: "https://www.fabindia.com/ccstore/v1/images/?source=/file/v5518791042436193578/products/10678116BD.m.210421.jpg&height=475&width=475",
    url3: "https://www.fabindia.com/ccstore/v1/images/?source=/file/v6473960560099308968/products/10678116BD.b.210421.jpg&height=940&width=940",
    size: "1.6m x 2.12m x 98cm",
    color: "b",
    detail: [
      "Queen Size Bed",
      "Seating Height-39cms",
      "Net Weight (in kgs)-136",
      "Secondary Material-Acacia Wood & Cane",
      "Load Capacity-200kgs",
      "Moisture Content-8-12%",
      "Without Mattress",
      "Assembly Required-Yes",
    ],
  },

  {
    sku: " 10678688BD",
    name: "Quadro Double Bed",
    mrp: 49900,
    url1: "https://www.fabindia.com/ccstore/v1/images/?source=/file/v7607727443901456531/products/10678688BD.f.230421.jpg&height=940&width=940",
    url2: "https://www.fabindia.com/ccstore/v1/images/?source=/file/v663594370733624891/products/10678688BD.b.230421.jpg&height=940&width=940",
    url3: "https://www.fabindia.com/ccstore/v1/images/?source=/file/v8289204354284443916/products/10678688BD.d.230421.jpg&height=475&width=475",
    size: "1.9m x 2.08m x 88cm",
    color: "b",
    detail: [
      "Double Bed",
      "Primary Material-Mango Wood",
      "Gross Weight (in kgs)-94",
      "Type of Storage-Drawers",
      "No. of Drawers-1",
      "Moisture Content-8-12%",
      "Moisture Content-8-12%",
      "Without Mattress",
      "Assembly Required-Yes",
    ],
  },
  {
    sku: "  10678701BD  ",
    name: "Azzuro 4 Poster Bed",
    mrp: 69900,
    url1: "https://www.fabindia.com/ccstore/v1/images/?source=/file/v7588102098259977898/products/10678701BD.f.210421.jpg&height=475&width=475",
    url2: "https://www.fabindia.com/ccstore/v1/images/?source=/file/v7192944131676190498/products/10678701BD.b.210421.jpg&height=940&width=940",
    url3: "https://www.fabindia.com/ccstore/v1/images/?source=/file/v7192944131676190498/products/10678701BD.b.210421.jpg&height=940&width=940",
    size: "2.04m x 2.06m x 1.9m",
    color: "b",
    detail: [
      "Double Bed",
      "Primary Material-Mango Wood",
      "Secondary Material-Ply Wood",
      "Gross Weight (in kgs)-112",
      "Poster Curtains Inlcuded",
      "Type of Finish-Matte",
      "Moisture Content-8-12%",
      "Without Mattress",
      "Assembly Required-Yes",
    ],
  },
  {
    sku: " 10672358BD ",
    name: "Equo Single Bed",
    mrp: 28900,
    url1: "https://www.fabindia.com/ccstore/v1/images/?source=/file/v3061911335132820548/products/10672358BD.f.030221.jpg&height=940&width=940",
    url2: "https://www.fabindia.com/ccstore/v1/images/?source=/file/v2372338082965261755/products/10672358BD.b.030221.jpg&height=940&width=940",
    url3: "https://www.fabindia.com/ccstore/v1/images/?source=/file/v7712415124130420602/products/10672358BD.d.030221.jpg&height=475&width=475",
    size: "99cm x 2.1m x 88cm",
    color: "g",
    detail: [
      "Single Bed",
      "With Front Slat Board",
      "Primary Material-Sheesham Wood",
      "Secondary Material-Ply Wood",
      "Gross Weight (in kgs)-62.7",
      "Type of Finish-Matte",
      "Moisture Content-8-12%",
      "Without Mattress",
      "Assembly Required-Yes",
    ],
  },

  {
    sku: " 10682029BD ",
    name: "Obra Queen Bed",
    mrp: 54900,
    url1: "https://www.fabindia.com/ccstore/v1/images/?source=/file/v5710735161676493201/products/10682029BD.f.230421.jpg&height=940&width=940",
    url2: "https://www.fabindia.com/ccstore/v1/images/?source=/file/v8242873629325810094/products/10682029BD.b.230421.jpg&height=940&width=940",
    url3: "https://www.fabindia.com/ccstore/v1/images/?source=/file/v7590183224444468033/products/10682029BD.r.230421.jpg&height=475&width=475",
    size: "1.58m x 2.09m x 85cm",
    color: "n",
    detail: [
      "Queen Size Bed",
      "Primary Material-Sheesham Wood",
      "Secondary Material-Acacia Wood",
      "Seating Height-30cms",
      "Gross Weight (in kgs)-73.7",
      "Size-54cm x 40.5cm x 61cm",
      "Moisture Content-8-12%",
      "Without Mattress",
      "Assembly Required-Yes",
    ],
  },
];

display(beds);
display(chair);
display(cabinets);
display(tables);

function display(array) {
  array.map(function (item) {
    var pc = document.getElementById("product_container");
    var div = document.createElement("div");
    pc.append(div);

    div.addEventListener("click", function () {
      openBox(item);
    });

    div.innerHTML = `<img class="image" src=${item.url1}>`;

    var h3 = document.createElement("h3");
    h3.textContent = item.name;
    div.append(h3);
    var h4 = document.createElement("h4");
    h4.innerHTML = "M.R.P. ₹ " + item.mrp;
    div.append(h4);
  });
  
}

var sorting = document.getElementById("sortingBox");
sorting.addEventListener("change", sort_by_price);
function sort_by_price(e) {
  var beds_chair = beds.concat(chair);
  var beds_chair_cabinets = beds_chair.concat(cabinets);
  var beds_chair_caninets_tables = beds_chair_cabinets.concat(tables);
  if (e.target.value == "hightolow") {
    beds_chair_caninets_tables = beds_chair_caninets_tables.sort(function (
      a,
      b
    ) {
      return b.mrp - a.mrp;
    });
  } else if (e.target.value == "lowtohigh") {
    beds_chair_caninets_tables = beds_chair_caninets_tables.sort(function (
      a,
      b
    ) {
      return a.mrp - b.mrp;
    });
  } else {
  }
  var pc = document.getElementById("product_container");
  pc.innerHTML = "";
  display(beds_chair_caninets_tables);
}

cartButton.addEventListener("click", function () {
  window.location.href = "cart.html";
});

function hideBox() {
  var cartData = JSON.parse(localStorage.getItem("cartItems")) || [];
  var len=cartData.length;
  document.getElementById("cartButton").textContent=len;
  document.querySelector(".modalBox").style.display = "none";
  document.querySelector(".blackBox").style.display = "none";
  document.querySelector(".tableList").innerHTML = "";
}

function openBox(item) {
  document.querySelector(".errormsg").textContent = "";
  whatdata = item;
  var modal = document.querySelector(".modalBox");
  modal.style.display = "block";
  document.querySelector(".img1").innerHTML = `<img  src=${item.url1}>`;
  document.querySelector(".img2").innerHTML = `<img  src=${item.url2}>`;
  document.querySelector(".img3").innerHTML = `<img  src=${item.url3}>`;

  document.querySelector(".pName").innerHTML = item.name;
  document.querySelector(".pSku").textContent = "SKU:" + item.sku;
  document.querySelector(".pSize").textContent = item.size;
  document.querySelector(".pMrp").textContent = "M.R.P. ₹" + item.mrp;

  for (var i = 0; i < 7; i++) {
    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    td1.innerHTML = `<li>${item.detail[i]}</li>`;
    tr.append(td1);
    i++;
    var td2 = document.createElement("td");
    td2.innerHTML = `<li>${item.detail[i]}</li>`;
    tr.append(td2);
    document.querySelector(".tableList").append(tr);
  }
  var coun = 1;
  // document.querySelector(".dec").addEventListener("click", function () {
  //   if (coun > 9) {
  //     alert("Not more then 10 item allowed per user");
  //     document.querySelector(".dec").removeEventListener();
  //   }
  //   document.getElementById("show").textContent = ++coun;
  //   var price = item.mrp * coun;
  //   document.querySelector(".pMrp").textContent = "M.R.P. ₹" + price;
  // });

  // document.querySelector(".inc").addEventListener("click", function () {
  //   if (coun < 2) {
  //     document.querySelector(".inc").removeEventListener();
  //   }

  //   document.getElementById("show").textContent = --coun;
  //   var price = item.mrp * coun;
  //   document.querySelector(".pMrp").textContent = "M.R.P. ₹" + price;
  // });

  document.querySelector(".blackBox").style.display = "block";
}

function onlyBeds() {
  document.querySelector(".pageHeading").textContent = "Beds";
  var pc = document.getElementById("product_container");
  pc.innerHTML = "";
  display(beds);
}
function onlyChairs() {
  document.querySelector(".pageHeading").textContent = "Chairs";
  var pc = document.getElementById("product_container");
  pc.innerHTML = "";
  display(chair);
}
function onlyTables() {
  document.querySelector(".pageHeading").textContent = "Tables";
  var pc = document.getElementById("product_container");
  pc.innerHTML = "";
  display(tables);
}
function onlyCabinets() {
  document.querySelector(".pageHeading").textContent = "Cabinets";
  var pc = document.getElementById("product_container");
  pc.innerHTML = "";
  display(cabinets);
}
function zerototen() {
  var beds_chair = beds.concat(chair);
  var beds_chair_cabinets = beds_chair.concat(cabinets);
  var res = beds_chair_cabinets.concat(tables);
  res = res.filter(function (item) {
    return item.mrp <= 10000;
  });
  var pc = document.getElementById("product_container");
  pc.innerHTML = "";
  display(res);
}
function tentotwenty() {
  var beds_chair = beds.concat(chair);
  var beds_chair_cabinets = beds_chair.concat(cabinets);
  var res = beds_chair_cabinets.concat(tables);
  res = res.filter(function (item) {
    return item.mrp >= 10000 && item.mrp <= 20000;
  });
  var pc = document.getElementById("product_container");
  pc.innerHTML = "";
  display(res);
}
function twentytothirty() {
  var beds_chair = beds.concat(chair);
  var beds_chair_cabinets = beds_chair.concat(cabinets);
  var res = beds_chair_cabinets.concat(tables);
  res = res.filter(function (item) {
    return item.mrp >= 20000 && item.mrp <= 30000;
  });
  var pc = document.getElementById("product_container");
  pc.innerHTML = "";
  display(res);
}
function thirtytoforty() {
  var beds_chair = beds.concat(chair);
  var beds_chair_cabinets = beds_chair.concat(cabinets);
  var res = beds_chair_cabinets.concat(tables);
  res = res.filter(function (item) {
    return item.mrp >= 30000 && item.mrp <= 40000;
  });
  var pc = document.getElementById("product_container");
  pc.innerHTML = "";
  display(res);
}
function fortytofifty() {
  var beds_chair = beds.concat(chair);
  var beds_chair_cabinets = beds_chair.concat(cabinets);
  var res = beds_chair_cabinets.concat(tables);
  res = res.filter(function (item) {
    return item.mrp >= 40000 && item.mrp <= 50000;
  });
  var pc = document.getElementById("product_container");
  pc.innerHTML = "";
  display(res);
}
function abovefifty() {
  var beds_chair = beds.concat(chair);
  var beds_chair_cabinets = beds_chair.concat(cabinets);
  var res = beds_chair_cabinets.concat(tables);
  res = res.filter(function (item) {
    return item.mrp >= 50000;
  });
  var pc = document.getElementById("product_container");
  pc.innerHTML = "";
  display(res);
}
function onlyb() {
  var beds_chair = beds.concat(chair);
  var beds_chair_cabinets = beds_chair.concat(cabinets);
  var res = beds_chair_cabinets.concat(tables);
  res = res.filter(function (item) {
    return item.color == "b";
  });
  var pc = document.getElementById("product_container");
  pc.innerHTML = "";
  display(res);
}
function onlyn() {
  var beds_chair = beds.concat(chair);
  var beds_chair_cabinets = beds_chair.concat(cabinets);
  var res = beds_chair_cabinets.concat(tables);
  res = res.filter(function (item) {
    return item.color == "n";
  });
  var pc = document.getElementById("product_container");
  pc.innerHTML = "";
  display(res);
}
function onlyg() {
  var beds_chair = beds.concat(chair);
  var beds_chair_cabinets = beds_chair.concat(cabinets);
  var res = beds_chair_cabinets.concat(tables);
  res = res.filter(function (item) {
    return item.color == "g";
  });
  var pc = document.getElementById("product_container");
  pc.innerHTML = "";
  display(res);
}

var cartdata = JSON.parse(localStorage.getItem("cartItems")) || [];
second.addEventListener("click", function () {
  for (var i = 0; i < cartdata.length; i++) {
    if (cartdata[i].sku == whatdata.sku) {
      alert("Alreday In Cart");
      return;
    }
  }

  cartdata.push(whatdata);

  localStorage.setItem("cartItems", JSON.stringify(cartdata));
});
