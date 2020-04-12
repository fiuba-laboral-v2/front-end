import githubLogo from "./github_logo.svg";
import meliLogo from "./meli_logo.svg";

const getOffers = () => ([
{
  uuid: "015b1c7a-579d-4562-8b76-f47b4a91dae0",
  title: "Desarrollador Java Full Stack",
  description: "descripcion",
  hoursPerDay: 8,
  minimumSalary: 50000,
  maximumSalary: 70000,
  createdAt: `${new Date(new Date().setDate(new Date().getDate()-3))}`,
  careers: [
    {
      code: "1111",
      description: "Ing. Informatica",
      creditsCount: 140,
      credits: 245
    }
  ],
  sections: [],
  company: {
    id: 1,
    cuit: "11111111111",
    companyName: "GitHub",
    slogan: "GitHub",
    description: "Description",
    logo: githubLogo,
    website: "github.com",
    email: "company.email@gmail.com",
    phoneNumbers: [],
    photos: []
  }
},
{
  uuid: "015b1c7a-579d-4562-8b76-f47b4a91dae2",
  title: "Desarrollador Python Full Stack",
  description: "descripcion",
  hoursPerDay: 6,
  minimumSalary: 40000,
  maximumSalary: 60000,
  createdAt: `${new Date(new Date().setDate(new Date().getDate()-15))}`,
  careers: [
    {
      code: "1111",
      description: "Ing. Informatica",
      creditsCount: 140,
      credits: 245
    }
  ],
  sections: [],
  company: {
    id: 2,
    cuit: "11111111111",
    companyName: "Mercado Libre",
    slogan: "Gatos",
    description: "Description",
    logo: meliLogo,
    website: "mercadolibre.com",
    email: "company.email@gmail.com",
    phoneNumbers: [],
    photos: []
  }
}
]);

export default getOffers;
