### Quiz Star Wars

Coders Camp (coderscamp.edu.pl) - projekt 3. Wykorzystanie asynchronicznego JavaScript oraz korzystanie z REST API.

## Działanie aplikacji:

1. Wybór trybu quizu (People, Vehicles, Spaceships)
2. Opis zasad dla quizu. Obok zasad pokazuje się losowe zdjęcie z danego trybu (dostosowany opis, jeśli np. imię osoby ze zdjęcia jest w opisie zasad).
3. Po rozpoczęciu gry rozpoczyna się odliczanie czasu (2 minut).
4. Zadaniem gracza jest odpowiedzieć na jak najwięcej pytań w ciągu ustalonego czasu. W trakcie trwania quizu miecz świetlny pokazuje ile jeszcze czasu zostało. Po wybraniu odpowiedzi zostaje ukazane przez sekundę czy odpowiedź była dobra czy zła. Następnie pytanie zostaje zmienione na kolejne i tak do końca czasu.
5. Pytania są generowane w następujący sposób: 
- zostaje pobrane zdjęcie z danego trybu
- losowane są 4 odpowiedzi z calla do api (dla People) będzie to: https://swapi.co/api/people
6. Odpowiedź jest weryfikowana w następujący sposób:
- zdjęcie jest przesyłane do GoogleVision API, z którego bierze się najwyższy wynik prawdopodobieństwa rozpoznania (albo kilka z nich, alorytm trzeba ustalić)
- przeszukiwane są wyniki działania GoogleVision dla zdjęcia, czy któryś z nich pokrywa się z odpowiedzią (ustalić stopień podobieństwa, np. odpowiedź to może być Jabba, a Google API zwróci "Jabba The Hutt")
7. Po ukończeniu czasu wynik gracza zapisywany jest w rankingu dla danej przeglądarki (LocalStorage) i pokazywany jest ranking 3 najlepszych wyników.


## Prototyp interfejsu:

https://www.figma.com/proto/L3XaDSR7whIjiZVw2HI0gO/CodersCamp2019_Projekt3_AsyncJS-and-REST?node-id=7%3A100&scaling=contain

Pokazany został tylko jeden tryb i jedno pytanie. Cała reszta działa analogicznie.


## Technologie do wykorzystania:
- JavaScript / TypeScript + Node.js
- HTML
- CSS / SCSS
- Star Wars API
- Google Vision API

