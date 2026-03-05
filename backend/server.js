const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

let movies = [
  { id: 1, title: 'Inception', year: 2010, genre: 'Science-fiction' },
  { id: 2, title: 'The Dark Knight', year: 2008, genre: 'Action' },
  { id: 3, title: 'Interstellar', year: 2014, genre: 'Science-fiction' },
  { id: 4, title: 'Parasite', year: 2019, genre: 'Thriller' },
  { id: 5, title: 'The Godfather', year: 1972, genre: 'Drame' },
];

app.get('/', (req, res) => res.send('Hello World from backend!'));

app.get('/api/movies', (req, res) => {
  res.json(movies);
});

app.get('/api/movies/:id', (req, res) => {
  const movie = movies.find(m => m.id === parseInt(req.params.id));
  if (!movie) return res.status(404).json({ error: 'Movie not found' });
  res.json(movie);
});

app.post('/api/movies', (req, res) => {
  const { title, year, genre } = req.body;
  const movie = { id: movies.length + 1, title, year, genre };
  movies.push(movie);
  res.status(201).json(movie);
});

app.listen(5000, () => console.log('Server running on port 5000'));
