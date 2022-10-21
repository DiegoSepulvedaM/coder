const productos = [
  {
    id: 1,
    nombre: "Harina",
    precio: 50,
    img:
      "https://imgs.search.brave.com/0rADYsSqCFD-yqCFOUMxwOROnbXHQOzX6yzH2pzLuQU/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5B/bUJIUFJEUjNKVXRT/MVRqY0lTVnVRSGFI/YSZwaWQ9QXBp",
    cantidad: 1,
  },
  {
    id: 2,
    nombre: "Galletitas",
    precio: 100,
    img:
      "https://imgs.search.brave.com/55gNtIZbX6WBcYtNlQj2RALgF7MGXj5-inCG7S7AQno/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/ZGlzdHJpYnVpZG9y/YXBvcC5jb20uYXIv/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MDUvZ2FsbGV0aXRh/cy1jYWNoYWZhei5q/cGc",
    cantidad: 1,
  },
  {
    id: 3,
    nombre: "Cerveza",
    precio: 150,
    img:
      "https://imgs.search.brave.com/lc3-PPZWksqJxFiD1l6eNOo9mrEMhzxuih1JKx2BDp8/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5M/YXJZdUNORkFtX20w/Q09YT1JJRXFnSGFI/YSZwaWQ9QXBp",
    cantidad: 1,
  },
  {
    id: 4,
    nombre: "Leche",
    precio: 200,
    img:
      "https://imgs.search.brave.com/PhMcsRWeRAxZ1FGNiP_W_31dJNkZz1vmgwvtjQqs-YI/rs:fit:423:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC4x/Y0JHYm00cWViT3hB/NDVLZzBmTnJnQUFB/QSZwaWQ9QXBp",
    cantidad: 1,
  },


{
  id: 5,
  nombre: "Fideos",
  precio: 250,
  img:
    "https://imgs.search.brave.com/jqYiHoWxMwB8UUBaNdwlr-2urwbZLnP5WyO94hNz2Rs/rs:fit:1000:1000:1/g:ce/aHR0cHM6Ly9jZG4u/c2hvcGlmeS5jb20v/cy9maWxlcy8xLzAy/NjAvOTA0My84NzA1/L3Byb2R1Y3RzL0ZJ/REVPU0NPUkJBVEFN/T0xJVEFMSUFCT0xT/QTI1MEdSXzE2MDB4/LmpwZz92PTE1OTE2/NDQ1NTI",
  cantidad: 1,
},

{
  id: 6,
  nombre: "Mayonesa",
  precio: 300,
  img:
    "https://imgs.search.brave.com/jh3BxdHg7yW-fCYihKXG0q2hJMA9U_9-5DGQXcvVhvo/rs:fit:1200:1001:1/g:ce/aHR0cHM6Ly9yZWNl/dGFjdWJhbmEuZXMv/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MDMvbWF5b25lc2Eu/anBn",
  cantidad: 1,

  
},

{
  id: 7,
  nombre: "Aceite",
  precio: 400,
  img:
    "https://imgs.search.brave.com/29Wap3ludD6ts0Bb1dAhYZy1qYLXMVMGpYYp-Xrhj6M/rs:fit:1200:720:1/g:ce/aHR0cHM6Ly93d3cu/c2VyY2Fuby5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMTcv/MDUvb2xpdmEtYWNl/aXRlLmpwZw",
  cantidad: 1,

  
},

{
  id: 8,
  nombre: "Arroz",
  precio: 350,
  img:
    "https://imgs.search.brave.com/zdhVpPlKzlAY3hBvL8-PH4nYJ2VyTNDwbpC_G9fBiBk/rs:fit:1200:900:1/g:ce/aHR0cHM6Ly9ib2xj/ZXJlYWxlcy5jb20u/YXIvd3AtY29udGVu/dC91cGxvYWRzLzIw/MjAvMDUvYXJyb3ot/Y29uZ2VsYWRvci5q/cGc",
  cantidad: 1,

  
},

{
  id: 9,
  nombre: "Jugo",
  precio: 200,
  img:
    "https://imgs.search.brave.com/ZgvLkjGgEX14rsnW7sGxX-RkgThEbeMVypIZFFRDrl8/rs:fit:1200:700:1/g:ce/aHR0cDovL3BpcmFw/b2xpdGljYS5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMTkv/MTAvZWwtanVnby1k/ZS1uYXJhbmphLmpw/Zw",
  cantidad: 1,

  
},

{
  id: 10,
  nombre: "sal",
  precio: 150,
  img:
    "https://imgs.search.brave.com/6cjqE5FfUp2ecsIu_PK8FZSfOZqNaj9UmdwXbNxxSXg/rs:fit:460:345:1/g:ce/aHR0cDovLzMuYnAu/YmxvZ3Nwb3QuY29t/Ly1LQ0s5c01rTTRQ/Zy9VaGtYU0VVcUhT/SS9BQUFBQUFBRnV2/WS85STRvTHVBVmpE/by9zMTYwMC9zYWwx/LmpwZw",
  cantidad: 1,

  
},
];