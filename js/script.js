const wycieczki = [
    {kraj: "Hiszpania", miasto: "Barcelona", typ: "All inclusive", miejsca: 10, opis: "Barcelona, znana z wyjątkowej architektury Antonio Gaudiego, przyciąga turystów poszukujących kulturalnego doświadczenia. Miasto oferuje bogatą historię i dziedzictwo artystyczne, które można odkrywać podczas spacerów ulicami. Dla miłośników kulinariów Barcelona to raj, gdzie można delektować się autentycznymi hiszpańskimi przysmakami w lokalnych restauracjach i barach tapas. Ponadto, plaże nad Morzem Śródziemnym zapewniają doskonałe miejsce do relaksu i rekreacji, przyciągając turystów poszukujących wypoczynku nad brzegiem morza.", obraz: "<div id='obrazek'><img src='img/barcelona.jpg' alt='barcelona'></div>", kategoria:"allinclusive"},
    {kraj: "Hiszpania", miasto: "Madryt", typ: "Last minute", miejsca: 2, opis: "Madryt, stolica Hiszpanii, kusi turystów swoim bogatym dziedzictwem historycznym i kulturalnym. Miasto oferuje niezliczone zabytki, w tym Pałac Królewski i muzea z dziełami mistrzów, takimi jak Museo del Prado. Dla miłośników życia nocnego i kulinariów, uliczne kawiarnie, bary i restauracje oferują autentyczne hiszpańskie doznania kulinarne oraz energiczną atmosferę, która trwa do późnych godzin nocnych. Madryt to także mekka dla miłośników zakupów, z butikami, sklepami z pamiątkami i tradycyjnymi targami, które przyciągają turystów z całego świata. Dodatkowo, parki i ogrody, takie jak Parque del Buen Retiro, stanowią doskonałe miejsce na relaks i odpoczynek po dniu pełnym zwiedzania.", obraz: "<div id='obrazek'><img src='img/madryt.jpg' alt='madryt'></div>", kategoria:"lastminute"},
    {kraj: "Grecja", miasto: "Ateny", typ: "Last minute", miejsca: 5, opis: "Ateny, stolica Grecji, to miejsce o bogatej historii i mitologii, które przyciąga turystów zainteresowanych kulturą starożytną. Akropol z Parthenonem na szczycie jest ikoną miasta, oferującą niezapomniane widoki i fascynującą historię. Miasto oferuje również liczne muzea, w tym Narodowe Muzeum Archeologiczne, gdzie można odkrywać starożytne artefakty i zabytki. Dla miłośników kulinariów, Ateny to raj, w którym można delektować się autentycznymi greckimi potrawami, takimi jak moussaka i souvlaki, w tradycyjnych tawernach i restauracjach. Ponadto, biorąc pod uwagę piękne wybrzeże Morza Egejskiego, turystyka morska, w tym wycieczki na wyspy, stanowi atrakcyjną opcję dla odwiedzających.", obraz: "<div id='obrazek'><img src='img/ateny.jpg' alt='ateny'></div>", kategoria:"lastminute"},
    {kraj: "Grecja", miasto: "Santorini", typ: "All inclusive", miejsca: 7, opis: "Santorini, grecka wyspa w południowej części Morza Egejskiego, przyciąga turystów swoim niezwykłym urokiem i malowniczym krajobrazem. Znana z białych domów w stylu cykladzkim i niebieskich kopuł, Santorini oferuje niezapomniane widoki, szczególnie o zachodzie słońca. Miasto Oia jest szczególnie popularne z powodu swoich wąskich uliczek i widoków na wulkaniczne klify. Turystyka na Santorini to także możliwość degustacji lokalnych win, ponieważ wyspa słynie z winnic i winogron, które produkują wyjątkowe wina. Ponadto, plaże o ciemnym piasku wulkanicznym, takie jak Red Beach czy Black Beach, zapewniają doskonałe miejsce do relaksu i kąpieli w słoneczny dzień.", obraz: "<div id='obrazek'><img src='img/santorini.jpg' alt='santorini'></div>", kategoria:"allinclusive"},
    {kraj: "Włochy", miasto: "Rzym", typ: "Kierunek turystyczny", miejsca: 15, opis: "Rzym, stolica Włoch, to miasto z ponad dwutysiącletnią historią, które przyciąga turystów z całego świata swoimi zabytkami i kulturowym dziedzictwem. Koloseum, Forum Romanum i Watykan to tylko kilka z wielu atrakcji, które można odkrywać podczas wizyty w tym mieście. Rzym oferuje również wyjątkową atmosferę, gdzie historia miesza się z nowoczesnością, tworząc unikalną scenerię dla spacerów po malowniczych uliczkach i placach. Dla miłośników sztuki i kultury, muzea i galerie sztuki, takie jak Galleria Borghese, są miejscami niezwykłych dzieł sztuki i artefaktów historycznych. Ponadto, włoska kuchnia, z autentycznymi pizzeriami, restauracjami i kawiarniami, stanowi nieodłączną część doświadczenia Rzymu, przyciągając smakoszy z całego świata.", obraz: "<div id='obrazek'><img src='img/rzym.jpg' alt='rzym'></div>", kategoria:"kierunekturystyczny"},
    {kraj: "Włochy", miasto: "Mediolan", typ: "Last minute", miejsca: 8, opis: "Mediolan, główne miasto regionu Lombardii we Włoszech, to dynamiczne centrum mody, biznesu i kultury, które przyciąga turystów swoim wyjątkowym stylem życia i atrakcjami. Główną atrakcją jest gotycka Katedra Duomo di Milano, imponująca budowla z marmurowymi wieżami i bogato zdobionymi fasadami. Miasto słynie również z zakupów, zwłaszcza na Via Monte Napoleone, jednej z najbardziej ekskluzywnych ulic handlowych na świecie, gdzie znajdują się luksusowe butiki i sklepy z najnowszymi trendami modowymi. Dla miłośników sztuki, Mediolan oferuje muzea i galerie sztuki, takie jak Pinakoteka Brera, gdzie można podziwiać bogatą kolekcję dzieł mistrzów włoskich i europejskich.", obraz: "<div id='obrazek'><img src='img/mediolan.jpg' alt='mediolan'></div>", kategoria:"kierunekturystyczny"},
	{kraj: "Austria", miasto: "Alpy", typ: "Zima 2024/2025", miejsca: 5, opis: "Alpy w Austrii to jedno z najbardziej malowniczych i popularnych miejsc na światowych mapach narciarstwa. To niezrównane wrażenia, które oferuje ta kraina, sprawiają, że jest ona doskonałym kierunkiem zimowym dla miłośników narciarstwa. Austriackie Alpy znane są z szerokiej gamy tras narciarskich, które zaspokajają potrzeby zarówno początkujących, jak i zaawansowanych narciarzy. Dodatkowo, urocze austriackie miasteczka górskie, jak na przykład St. Anton czy Kitzbühel, zapewniają niezapomniany urok alpejskiego życia, gdzie można delektować się tradycyjną kuchnią, relaksować się w przytulnych górskich pensjonatach oraz korzystać z licznych atrakcji oferowanych przez lokalną społeczność. Alpy austriackie to także świetne miejsce dla rodzin, ze względu na swoją przyjazną atmosferę oraz liczne udogodnienia dla dzieci. Całkowity pakiet narciarskich doświadczeń sprawia, że Alpy w Austrii są niezapomnianym kierunkiem turystycznym dla miłośników zimowej przygody.", obraz: "<div id='obrazek'><img src='img/alpy.jpg' alt='alpy'></div>", kategoria:"zima"}
];//tablica z wycieczkami i ich parametrami


//po zaladowaniu dookumentu wyswietlane sa wszystkie wyniki (chyba ze przeszlismy do strony oferta.html po wcisnieciu przyciskow "wiecej informacji" na stronei index.html
document.addEventListener('DOMContentLoaded', function()
{
    filtruj();
}
);

//funkcja do fiktrowania wynikow po kraju, typie i ilosci miejsc
function filtruj()
{
    const formularz = document.getElementById('formularz');
    const kraje = Array.from(formularz.elements['kraj']).filter(cb => cb.checked).map(cb => cb.value);
    const typy = Array.from(formularz.elements['typ']).filter(cb => cb.checked).map(cb => cb.value);
    const miejsca = formularz.elements['miejsca'].value;

    let przefiltrowaneWycieczki = [];
	
	//dodawanie do tablicy wycieczek ktore spelniaja filtr kraju
    if(kraje.length > 0)
	{
        kraje.forEach(kraj =>
		{
            przefiltrowaneWycieczki.push(...wycieczki.filter(wycieczka => wycieczka.kraj === kraj));
        }
		);
    }
	
	else
	{
        //jesli nie zaznaczono nic w formularzu, wyswietl wszystkie wyniki
        przefiltrowaneWycieczki = [...wycieczki];
    }

    //filtrowanie po wybranych typach
    if(typy.length > 0)
	{
        przefiltrowaneWycieczki = przefiltrowaneWycieczki.filter(wycieczka => typy.includes(wycieczka.typ));
    }

    //filtrowanie po wybranych ilosciach miejsc
    if(miejsca === "1-5")
	{
        przefiltrowaneWycieczki = przefiltrowaneWycieczki.filter(wycieczka => wycieczka.miejsca >= 1 && wycieczka.miejsca <= 5);
    }
	
	else if(miejsca === "6-10")
	{
        przefiltrowaneWycieczki = przefiltrowaneWycieczki.filter(wycieczka => wycieczka.miejsca >= 6 && wycieczka.miejsca <= 10);
    }
	
	else if(miejsca === "11+")
	{
        przefiltrowaneWycieczki = przefiltrowaneWycieczki.filter(wycieczka => wycieczka.miejsca >= 11);
    }
	
	//filtrowanie od razu po kliknieciu przycisków wspomnianych wyzej na stronie index.html
    const urlParams = new URLSearchParams(window.location.search);
    const kategoria = urlParams.get('kategoria');
    if(kategoria)
	{
        przefiltrowaneWycieczki = przefiltrowaneWycieczki.filter(wycieczka => wycieczka.kategoria === kategoria);
	}
	
	//wywolanie funkcji wyswietlajacej wycieczki
    wyswietlWyniki(przefiltrowaneWycieczki);
}


//funkcja wyswietlajaca wycieczki
function wyswietlWyniki(wycieczki)
{
	
	//pobieranie pustego diva z wynikami
    const wynikiDiv = document.getElementById('wyniki');
    wynikiDiv.innerHTML = '';
	
	//jesli tablica wycieczek nie ma elementow to wyswietl komunikat
    if(wycieczki.length === 0)
	{
        wynikiDiv.innerHTML = '<p>Żadna wycieczka nie spełnia twoich kryteriów</p>';
        return;
    }
	
	//dla kazdej wycieczki z tablicy stworz diva, nadaj mu klase i wpisz do niego odpowiednia zawartosc, nastepnie wyswietl go na stronie
    wycieczki.forEach(wycieczka =>
	{
        const wycieczkaDiv = document.createElement('div');
        wycieczkaDiv.className = 'kierunek';
        wycieczkaDiv.innerHTML = `${wycieczka.obraz}<h3>${wycieczka.kraj} - ${wycieczka.miasto} - ${wycieczka.typ}</h3><p>${wycieczka.opis}</p><p class='dostepneMiejsca'>Dostępne miejsca: ${wycieczka.miejsca}<a href='rezerwacja${wycieczka.miasto}.html'><button>Zarezerwuj wycieczkę</button></a></p>`;
        wynikiDiv.appendChild(wycieczkaDiv);
    }
	);
}


//pojawianie sie i znikanie napisu menu w panelu nawigacyjnym (widoczny jest tylko w mniejszych rozmiarach okna)
function przelaczMenu() 
{
    const navMenu = document.querySelector('.nav-bar ul');
    navMenu.classList.toggle('active');
}

//funkcja obslugujaca formularze i zapisujaca dane w formacie json, wyswietlajaca te dane w konsoli
function obslugaFormularzy(formularz)
{
	document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    processForm(this);
	});
	
    var elementyFormularza = formularz.elements;

    var daneFormularza =
	{
        kierunek: elementyFormularza['kierunek'].value,
        imie: elementyFormularza['imie'].value,
        nazwisko: elementyFormularza['nazwisko'].value,
        email: elementyFormularza['email'].value,
        iloscOsob: elementyFormularza['iloscOsob'].value,
        platnosc: elementyFormularza['platnosc'].value,
        akceptacja: elementyFormularza['akceptacja'].checked
    };

    var json = JSON.stringify(formData);

	console.log(json);
}
