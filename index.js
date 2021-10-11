<<<<<<< HEAD
const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;

const pokedex = [
  {
    numero: "007",
    nome: "Squirtle",
    tipo: "Água",
    imagem: "/img/squirtle.png",
    descricao: "Quando se sente ameaçado, ele puxa seus membros para dentro de sua concha e espirra água de sua boca.",
    altura: "0.5 m",
    peso: "9.0 kg",
    categoria: "Tiny Turtle",
    habilidade: "Torrente"
  },
  {
    numero: "001",
    nome: "Bulbasaur",
    tipo: "Grama e Poção",
    imagem: "/img/bulbasaur.png",
    descricao: "Enquanto é jovem, ele usa os nutrientes que estão armazenados na semente em seu dorso para crescer.",
    altura: "0.7 m",
    peso: "6.9 kg",
    categoria: "Semente",
    habilidade: "Overgrow"
  },
  {
    numero: "035",
    nome: "Clefairy ",
    tipo: "Fadas",
    imagem: "/img/clefairy.png",
    descricao: "Seu comportamento adorável e seu choro o tornam muito popular. No entanto, esse Pokémon fofo raramente é encontrado.",
    altura: "0.6 m",
    peso: "7.5 kg",
    categoria: "Fadas",
    habilidade: "Guarda Mágica"
  }
];

let message = "";

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());

app.get("/", (req, res) => {
  setTimeout(() => {
    message = "";
  }, 1000);

  res.render("index", {
    message,
    pokedex,
  });
});

app.get("/cadastro", (req, res) => {
  res.render("cadastro");
});

app.get("/detalhes/:indice", (req, res) => {
  const indice = parseInt(req.params.indice);
  const pokemon = pokedex[indice];

  res.render("detalhes", { pokemon });
});

app.post("/subscription", (req, res) => {
  const { numero, nome, tipo, imagem, descricao, altura, peso, categoria, habilidade } = req.body;

  pokedex.push({
    numero,
    nome,
    tipo,
    imagem,
    descricao,
    altura,
    peso,
    categoria,
    habilidade,
  })

  res.redirect("/");
});

app.post("/subscription", (req, res) => {
  res.send("Formulário Recebido!");
});

=======
const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;

const pokedex = [
  {
    numero: "007",
    nome: "Squirtle",
    tipo: "Água",
    imagem: "/img/squirtle.png",
    descricao: "Quando se sente ameaçado, ele puxa seus membros para dentro de sua concha e espirra água de sua boca.",
    altura: "0.5 m",
    peso: "9.0 kg",
    categoria: "Tiny Turtle",
    habilidade: "Torrente"
  },
  {
    numero: "001",
    nome: "Bulbasaur",
    tipo: "Grama e Poção",
    imagem: "/img/bulbasaur.png",
    descricao: "Enquanto é jovem, ele usa os nutrientes que estão armazenados na semente em seu dorso para crescer.",
    altura: "0.7 m",
    peso: "6.9 kg",
    categoria: "Semente",
    habilidade: "Overgrow"
  },
  {
    numero: "035",
    nome: "Clefairy ",
    tipo: "Fadas",
    imagem: "/img/clefairy.png",
    descricao: "Seu comportamento adorável e seu choro o tornam muito popular. No entanto, esse Pokémon fofo raramente é encontrado.",
    altura: "0.6 m",
    peso: "7.5 kg",
    categoria: "Fadas",
    habilidade: "Guarda Mágica"
  }
];

let message = "";

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());

app.get("/", (req, res) => {
  setTimeout(() => {
    message = "";
  }, 1000);

  res.render("index", {
    message,
    pokedex,
  });
});

app.get("/cadastro", (req, res) => {
  res.render("cadastro");
});

app.get("/detalhes/:indice", (req, res) => {
  const indice = parseInt(req.params.indice);
  const pokemon = pokedex[indice];

  res.render("detalhes", { pokemon });
});

app.post("/subscription", (req, res) => {
  const { numero, nome, tipo, imagem, descricao, altura, peso, categoria, habilidade } = req.body;

  pokedex.push({
    numero,
    nome,
    tipo,
    imagem,
    descricao,
    altura,
    peso,
    categoria,
    habilidade,
  })

  res.redirect("/");
});

app.post("/subscription", (req, res) => {
  res.send("Formulário Recebido!");
});

>>>>>>> 9c121fe9826ad47db00a8ed910b10408e41596ff
app.listen(port, () => console.log(`Servidor rodando em http://localhost:${port}`));