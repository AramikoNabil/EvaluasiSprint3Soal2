const asalSantri = {
  Sidik: "Lampung",
  Wandi: "Prabumulih",
  Rahmad: "Medan",
  Usamah: "Ceribon",
  Syofyan: "Purwokerto",
  Aldi: "Kendari",
  Kardi: "Lombok",
};

({Sidik, Wandi, Rahmad, Usamah,...rest} = asalSantri)

console.log (Sidik, Wandi, Rahmad,  Usamah)
console.log (rest)
