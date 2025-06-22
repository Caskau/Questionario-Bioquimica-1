// ... início inalterado ...

const flashcards = {
  Aminoácidos: [
    { frente: "O que são aminoácidos?", verso: "São os blocos construtores das proteínas." },
    { frente: "Qual é a estrutura básica de um aminoácido?", verso: "Grupo amino, grupo carboxila, carbono central e cadeia lateral (R)." }
  ],
  Proteínas: [
    { frente: "Quais os níveis estruturais da proteína?", verso: "Primária, secundária, terciária e quaternária." },
    { frente: "O que é desnaturação?", verso: "Perda da estrutura e função da proteína por pH, calor, etc." }
  ],
  Enzimas: [
    { frente: "O que são enzimas?", verso: "Catalisadores biológicos que aceleram reações." },
    { frente: "O que é inibição competitiva?", verso: "Inibidor compete pelo sítio ativo da enzima." }
  ],
  Carboidratos: [
    { frente: "O que são monossacarídeos?", verso: "São açúcares simples, como glicose e frutose." },
    { frente: "Qual a função principal dos carboidratos?", verso: "Fornecimento de energia rápida." }
  ]
};

// ... dentro do componente, após sugestões de estudo ...
<div className="pt-4">
  <h2 className="text-xl font-bold">Flashcards por tema</h2>
  {Object.entries(revisao).map(([tema]) => (
    <div key={tema} className="my-4">
      <h3 className="text-lg font-semibold">{tema}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {flashcards[tema]?.map((card, idx) => (
          <Card key={idx} className="border p-4">
            <CardContent>
              <p className="font-semibold">{card.frente}</p>
              <p className="text-gray-700 pt-2">{card.verso}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  ))}
</div>

// ... fim inalterado ...
