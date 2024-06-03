# RECAP ANGULAR

## ARGOMENTI E DESCRIZIONE

### @Input
A CHE SERVE: serve a passare dati/proprietà tra PARENT e CHILD, dove per CHILD si intende un component che viene chiamato DIRETTAMENTE dal parent, quindi non è presente nel sistema di routing.
Il decoratore viene inserito nel component CHILD, e viene passato in binding dal parent: [dato-passato]

QUANDO SI USA:
Quando dobbiamo passare un valore STATICO a un component child: può anche essere passato a seguito di un input, ma il child riceverà SEMPRE un valore STATICO

FREQUENZA D'USO: frequente

### @Output
A CHE SERVE: serve a passare dati/proprietà tra CHILD e PARENT, allo stesso modo di @Input, cioè DATI STATICI.
Il decoratore viene inserito nel component PARENT, e viene passato attraverso un EventEmitter dal child.
ANCHE IN QUESTO CASO il component child NON È PRESENTE nel sistema di routing.

QUANDO SI USA:
Quando dobbiamo passare valori STATICI a un component parent, tipicamente da un form; è stato di fatto superato per la maggior parte delle esigenze da behaviourSubject

FREQUENZA D'USO: rarissimo

### @ViewChild
A CHE SERVE: a ottenere un riferimento a un componente child e/o a un singolo elemento di esso, e consente al componente parent di interagire con le proprietà del componente figlio.

QUANDO SI USA:
Tipicamente per STAMPARE in un componente parent i risultati di un metodo interno al component child

FREQUENZA D'USO: raro

### Observable
A CHE SERVE
È un elemento Angular RXjS che comunica un flusso di dati STATICO

QUANDO SI USA
Tipicamente per comunicare a uno o più component (multicasting: a differenza delle promise, che finchè non risolvono non possono comunicare il loro esito ad altri, gli observable possono essere sottoscritti da più component) lo STATO (valore) di un subject/behaviourSubject

FREQUENZA D'USO
Per trasmettere all'esterno di un service i valori di un subject/behaviourSubject senza che possano essere modificati

### Subject
A CHE SERVE
È un elemento RXjS che comunica ai suoi sottoscrittori (subscribe) il proprio stato e, una volta comunicato, si cancella da solo (l'Observable puro deve essere cancellato:

    ngOnDestroy(): void {
        this.myObservable.unsubscribe();
    }

)

NON ha bisogno di avere un valore iniziale

QUANDO SI USA:
Tipicamente per comunicare a uno o più component un valore STATICO che il component si limita a ricevere (es. carrello)

FREQUENZA D'USO:
Non frequente

### behaviourSubject
A CHE SERVE:
È un elemento RXjS che comunica ai suoi sottoscrittori (subscribe) il proprio stato e, una volta comunicato, si cancella da solo, MA tiene traccia del suo stato precedente per comunicarlo ad altri sottoscritttori.
DEVE avere SEMPRE un valore iniziale!

QUANDO SI USA:
Tipicamente per comunicare a uno o più component un valore DINAMICO che il component riceve e utilizza, aggiornato ogni volta che il brhaviourSubject riceve un nuovo valore, perché reagisce al ciclo onChanges dei component Angular.

SIA I SUBJECT CHE I BEHAVIOURSUBJECT hanno tre callback predefinite:
.next(valore-da-ricevere): aggiorna il loro stato/valore - PIÙ FREQUENTEMENTE USATO
.error(): intercetta un eventuale errore
.complete(): usato prevalentemente con i subject, determina la loro chiusura

### USO GENERALE
Gli observable puri SONO i metodi HTTP e vengono usati per trasmettere il valore di un behaviourSubject quando questo non DEVE poter essere modificato da chi lo sottoscrive.
I behaviourSubject sono utilizzati per funzionalità tipo carrello (public), login (private) e situazioni simili
I subject sono utilizzati (non spesso) al posto di @Output.


# SCHEMATICS

## COMPONENT:
insieme di file html, css(scss), ts, sono gli elementi FUNZIONALI dell'applicazione, cioè sono gli elementi che definiscono la logica e il flusso dell'applicazione

## MODULE:
schematic STATICO che definisce gli import per l'intera applicazione (app.module) o per una funzionalità specifica (feature module-lazy loading), dichiarando i component, i module e i provider (interceptors, guards) che servono l'intera applicazione (app.module) o una funzionalità specifica (feature module-lazy loading)

## INTERFACE:
schematic che definisce la struttura del SINGOLO OGGETTO all'interno di una base dati; deve essere costruita ESATTAMENTE come la base dati richiede (la chiave DEVE avere lo stesso nome che ha nella base dati, il valore della chiave DEVE essere dello stesso tipo presente nella base dati)

## SERVICE:
schematic che EROGA metodi PURI, generalmente con un return (chiamate HTTP), che restituiscono un risultato (sarà poi il component a decidere cosa fare con questo risultato) e variabili DEFINITE a qualsiasi component lo sottoscriva: è l'elemento principale della Dependency Injection

## GUARD:
schematic che verifica la possibilità o meno dell'attivazione di una rotta, e quindi del component associato, generalmente in base alla presenza dell'utente loggato/ai suoi permessi

## INTERCEPTOR:
schematic che INTERCETTA tutte le chiamate HTTP per il solo fatto di esistere e di essere dichiarato come provider HTTP_INTERCEPTORS in app.module, e ne modifica gli headers (generalmente) in base a quanto richiesto dall'API che si sta interrogando

## PIPE:
schematic che modificano il formato di VISUALIZZAZIONE di alcuni tipi di dati (date, currency, decimal, percent...)

## DIRECTVE:
schematic custom che modifica L'ASPETTO di elementi presenti nel DOM
