//Criando a API com Fastify
import fastify from "fastify";
import cors from "@fastify/cors";


const server = fastify({logger: true});
server.register(cors, {
    origin: "*",
});

const teams = [
    {id: 1, name: "Ferrari", base: "Maranello, Itália"},
    {id: 2, name: "Red Bull Racing", base: "Milton Keynes, Reino Unido"},
    {id: 3, name: "Mercedes", base: "Brackley, Reino Unido"},
    {id: 4, name: "McLaren", base: "Woking, Reino Unido"},
    {id: 5, name: "Aston Martin", base: "Silverstone, Reino Unido"},
    {id: 6, name: "Alpine", base: "Enstone, Reino Unido"},
    {id: 7, name: "Williams", base: "Grove, Reino Unido"},
    {id: 8, name: "RB (Visa Cash App RB)", base: "Faenza, Itália"},
    {id: 9, name: "Sauber (Stake F1 Team)", base: "Hinwil, Suíça"},
    {id: 10, name: "Haas", base: "Kannapolis, Estados Unidos"},
];

const drivers = [
    // McLaren
    {id: 1, name: "Lando Norris", team: "McLaren"},
    {id: 2, name: "Oscar Piastri", team: "McLaren"},

    // Ferrari
    {id: 3, name: "Charles Leclerc", team: "Ferrari"},
    {id: 4, name: "Lewis Hamilton", team: "Ferrari"},

    // Red Bull Racing
    {id: 5, name: "Max Verstappen", team: "Red Bull Racing"},
    {id: 6, name: "Isack Hadjar", team: "Red Bull Racing"},

    // Mercedes
    {id: 7, name: "George Russell", team: "Mercedes"},
    {id: 8, name: "Andrea Kimi Antonelli", team: "Mercedes"},

    // Aston Martin
    {id: 9, name: "Fernando Alonso", team: "Aston Martin"},
    {id: 10, name: "Lance Stroll", team: "Aston Martin"},

    // Alpine
    {id: 11, name: "Pierre Gasly", team: "Alpine"},
    {id: 12, name: "Franco Colapinto", team: "Alpine"},

    // Haas
    {id: 13, name: "Esteban Ocon", team: "Haas"},
    {id: 14, name: "Oliver Bearman", team: "Haas"},

    // Racing Bulls (RB)
    {id: 15, name: "Liam Lawson", team: "Racing Bulls"},
    {id: 16, name: "Arvid Lindblad", team: "Racing Bulls"},

    // Audi
    {id: 17, name: "Nico Hülkenberg", team: "Audi"},
    {id: 18, name: "Gabriel Bortoleto", team: "Audi"},

    // Williams
    {id: 19, name: "Alexander Albon", team: "Williams"},
    {id: 20, name: "Carlos Sainz", team: "Williams"},

    // Cadillac
    {id: 21, name: "Sergio Pérez", team: "Cadillac"},
    {id: 22, name: "Valtteri Bottas", team: "Cadillac"},
];


server.get("/teams", async (request, response) => {
    response.type("application/json").code(200);
    return {teams};
});

server.get("/drivers", async (request, response) => {
    response.type("application/json").code(200);
    return {drivers};
});

interface DriverParams {
    id: string;
}

server.get<{ Params: DriverParams }>("/drivers/:id", async (request, response) => {
    const id = parseInt(request.params.id);
    const driver = drivers.find((d) => d.id === id);
    if (!driver) {
        response.type("application/json").code(404);
        return {message: "Driver not found"};
    }else {     
        response.type("application/json").code(200);
        return {driver};
    }
});


server.listen({port: 3333}, () => {
    console.log("Server init");
    
});   