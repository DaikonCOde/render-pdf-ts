# REACT PDF COMPONENTS

## Index

- [Configuracion](#configuración)
- [Componentes](#componentes)
- [Estilos globales](#estilos-globales)

## Configuración

1. **Creación de nuevo PDF**

   Primero creamos una nueva carpeta dentro de "PDF", dentro de esta nueva carpeta creamos el archivo "Render[nombre-carpeta].tsx" que tendrá la siguiente estructura.

   _**Nota:** La nomenclatura para nombrar los PDFs es la siguiente "NombrePdfPrueba". la primera letra de cada palabra empieza con mayúscula_

   ```jsx
   import { Document, PDFViewer, Page } from "@react-pdf/renderer";
   import { globalStyles, theme } from "../../components/theme";

   // se modifica el nombre de componente por el del archivo "Render[nombre-carpeta].tsx"
   function RenderNombreArchivo() {
     // custom style

     return (
       <>
         <PDFViewer width={630} height={750}>
           <Document>
             <Page size={"A4"} style={globalStyles.page}>
               {/* contenido */}
             </Page>
           </Document>
         </PDFViewer>
       </>
     );
   }

   export default RenderNombreArchivo;
   ```

2. **Renderizado de nuevo PDF en el navegador**

   Una vez creada esta carpeta con su archivo Render, modificamos nuestro archivo "App.tsx" para que se renderize este nuevo componente en el navegador

   ```jsx
   import RenderNombreArchivo from "./PDF/NombreArchivo/RenderNombreArchivo";

   function App() {
     return (
       <>
         <RenderNombreArchivo />
       </>
     );
   }

   export default App;
   ```

3. **Inicialización del proyecto**

   Para inicializar el proyecto abrimos la terminal de comandos con el atajo Ctrl + J  
   Ingresamos el comando:

   > npm run dev

   La aplicación empezará a correr en nuestro local

   > [http://localhost:5173/](http://localhost:5173/)

## Componentes

Tenemos una lista de componentes listos para realizar en los PDFs.

- [Row](#row)
- [Cell](#cell)
- [HeadSection](#headsection)
- [Textarea](#textarea)
- [WrapOptions y Option](#wrapoptions-y-option)
- [WrapImage y Img](#wrapimage-e-img)
- [Separator](#separator)

## Row

Este componente se usa para encapsular una fila de información

1. **Estructura inicial**  
   La estructura de Row es la siguiente  
   ![alt text](/public/imgs/row_style.png)  
   cuenta con border a la izquiera y en la parte inferior.

2. **Uso**

   Se importa el componente y se llama al componente

   ```jsx
   import { Cell, Row } from "../../components/row_and_cell";

   // ---
   <Row>{...hijos}</Row>;
   ```

3. **Métodos**  
   Tenemos los siguientes métodos para este componente
   - [border?: boolean;](#border)
   - [top?: boolean;](#top)
   - [bb_row?: boolean;](#bb_row)
   - [bl_row?: boolean;](#bl_row)
   - [style_row?: Style;](#style_row)
   - [fixed?: boolean;](#fixed)
   - [break_section?: boolean;](#break_section)
   - [head_bold?: boolean;](#head_bold-global)
   - [height_head_cell?: number;](#height_head_cell-global)
   - [height_content_cell?: number;](#height_content_cell-global)
   - [br_head?: boolean;](#br_head-global)
   - [bb_head?: boolean;](#bb_head-global)
   - [bt_content?: boolean;](#bt_content-global)
   - [br_content?: boolean;](#br_content-global)
   - [global_style_wrap?: Style;](#global_style_wrap)
   - [global_style_head?: Style;](#global_style_head)
   - [global_style_content?: Style;](#global_style_content)
   - [br_cell?: boolean;](#br_cell-global)
   - [variant?: VariantRowAndCell;](#variant)

### **border** {#border}

- Uso

  ```jsx
  <Row border={false}>
    <Cell width={100} />
  </Row>
  ```

- Efecto  
  Elimina los border left y bottom del Row.

  ![Border hide](/public/imgs/row_border_hide.png)

- Caso de uso  
  Mayormente cuando se tiene un componente Row dentro de otro

  ```jsx
  <Row>
    <Cell
      width={100}
      render_content={() => (
        <Row border={false}>
          <Cell width={50} />
          <Cell width={50} />
        </Row>
      )}
    />
  </Row>
  ```

### **top** {#top}

- Uso

  ```jsx
  <Row top>
    <Cell width={100} />
  </Row>
  ```

- Efecto  
  Añade border top al componente

  ![Referencia](/public/imgs/row_top.png)

- Caso de uso  
  Mayormente cuando es el primer componente de nuestro PDF o cuando hay separaciones entre componentes.

### **bb_row** {#bb_row}

- Uso

  ```jsx
  <Row bb_row={false}>
    <Cell width={100} />
  </Row>
  ```

- Efecto  
  Elimina el border bottom del componente

  ![Referencia](/public/imgs/row_bb.png)

- Caso de uso  
  En casos especiales.

### **bl_row** {#bl_row}

- Uso

  ```jsx
  <Row bl_row={false}>
    <Cell width={100} />
  </Row>
  ```

- Efecto  
  Elimina el border left del componente

  ![Referencia](/public/imgs/row_bl.png)

- Caso de uso  
  En casos especiales.

### **style_row** {#style_row}

- Uso

  ```jsx
  <Row style_row={{}}>
    <Cell width={100} />
  </Row>
  ```

- Efecto  
  Aplica estilos personalizados al componente.
  [referecia de estilos permitidos](https://react-pdf.org/styling)

- Caso de uso  
  Cuando se tiene que dar estilos personalizados a un componente.

### **fixed** {#fixed}

- Uso

  ```jsx
  <Row fixed>
    <Cell width={100} />
  </Row>
  ```

- Efecto  
  Hace que el componente se renderize en cada página del PDF.

- Caso de uso  
  Mayormente en cabeceras.

### **break_section** {#break_section}

- Uso

  ```jsx
  <Row break_section>
    <Cell width={100} />
  </Row>
  ```

- Efecto  
  Hace que el componente de un salto de página.

- Caso de uso  
  Mayormente cuando se rompen los estilos del componente dentro de la página actual

### **head_bold global**

- Uso

  ```jsx
  <Row head_bold={false}>
    <Cell width={100} />
  </Row>
  ```

- Efecto  
  Este método afecta directamente a su componente hijo [Cell](#cell)

- Caso de uso  
  Cuando se desea que el label del componente [Cell](#cell) no este en negrita

### **height_head_cell global**

- Uso

  ```jsx
  <Row height_head_cell={28}>
    <Cell width={100} />
  </Row>
  ```

- Efecto  
  Este método afecta directamente a su componente hijo [Cell](#cell)  
  Hace que todas los head del componente Cell tomen un mismo alto

> Sin el método `height_head_cell`  
> ![Referencia](/public/imgs/without_cell_height_head.png)  
> Con el método `height_head_cell`  
> ![Referencia](/public/imgs/with_cell_height_head.png)

- Caso de uso  
  Cuando se tiene textos demasiados largos dentro del head de Cell, y se quiere colocar un alto para todos los componentes hijos.

### **height_content_cell global**

- Uso

  ```jsx
  <Row height_content_cell={28}>
    <Cell width={100} />
  </Row>
  ```

- Efecto  
  Hace lo mismo que el método anterior pero este lo aplica en el content del componente Cell

- Caso de uso  
  Cuando se tiene textos demasiados largos dentro del content de Cell, y se quiere colocar un alto para todos los componentes hijos.

### **br_head global**

- Uso

  ```jsx
  <Row br_head={false}>
    <Cell width={100} />
  </Row>
  ```

- Efecto  
  Elimina todos los bordes de la derecha ( border right ) de la sección head del componente [Cell](#cell)

  ![hide border right](/public/imgs/cell_head_br.png)

- Caso de uso  
  Especialmente cuando trabajados con el método [inline](#inline) de Cell y no necesitamos que haya la separación entre head y content.

### **bb_head global**

- Uso

  ```jsx
  <Row bb_head={false}>
    <Cell width={100} />
  </Row>
  ```

- Efecto  
  Elimina todos los bordes inferiores ( border bottom ) de la sección head del componente [Cell](#cell)

  ![hide border right](/public/imgs/cell_head_bb.png)

- Caso de uso  
  Especialmente cuando no se necesita tener una separación entre head y content de Cell

### **bt_content global**

- Uso

  ```jsx
  <Row bt_content={false}>
    <Cell width={100} />
  </Row>
  ```

- Efecto  
  Elimina todos los bordes susperiores ( border top ) de la sección content del componente [Cell](#cell)

- Caso de uso  
  Únicamente se utiliza cuando se trabajada con [Variants](#variant)

### **br_content global**

- Uso

  ```jsx
  <Row bb_head={false}>
    <Cell width={100} />
  </Row>
  ```

- Efecto  
  Elimina todos los bordes de la derecha ( border right ) de la sección content del componente [Cell](#cell)

- Caso de uso  
  Únicamente se utiliza cuando se trabajada con [Variants](#variant)

### **global_style_wrap** {#global_style_wrap}

- Uso

  ```jsx
  <Row global_style_wrap={{}}>
    <Cell width={100} />
  </Row>
  ```

- Efecto  
  Aplica estilos personalizados cada hijo Cell.
  [referecia de estilos permitidos](https://react-pdf.org/styling)

- Caso de uso  
  Cuando se tiene que dar estilos personalizados a un componente.

### **global_style_head** {#global_style_head}

- Uso

  ```jsx
  <Row global_style_head={{}}>
    <Cell width={100} />
  </Row>
  ```

- Efecto  
  Aplica estilos personalizados a cada sección head del componente Cell.
  [referecia de estilos permitidos](https://react-pdf.org/styling)

- Caso de uso  
  Cuando se tiene que dar estilos personalizados a la sección head.

### **global_style_content** {#global_style_content}

- Uso

  ```jsx
  <Row global_style_content={{}}>
    <Cell width={100} />
  </Row>
  ```

- Efecto  
  Aplica estilos personalizados a cada sección content del componente Cell.
  [referecia de estilos permitidos](https://react-pdf.org/styling)

- Caso de uso  
  Cuando se tiene que dar estilos personalizados a la sección content.

### **br_cell global**

- Uso

  ```jsx
  <Row br_cell={false}>
    <Cell width={100} />
  </Row>
  ```

- Efecto  
  Elimina el borde de la derecha ( border right) del componente Cell
  ![alt text](/public/imgs/cell_br.png)

- Caso de uso  
  Cuando no de require separación entre los diferentes componentes Cell pero más común cuando se trabajado con elementos `anidados`

## Cell

Este componente representa las columnas de una fila.

1. **Estructura inicial**  
   La estructura de Cell es la siguiente  
   ![alt text](/public/imgs/cell_style.png)  
   cuenta con borde a la derecha (border right) y la sección Head cuenta con un borde en la parte inferior (border bottom)

   Este componente tiene dos secciones importantes

   - **Head**  
      Donde va el label de la columna
   - **Content**  
      Donde va el valor de la columna

2. **Uso**

   Se importa el componente y se renderiza

   ```jsx
   import { Cell, Row } from "../../components/row_and_cell";

   // ---
   <Row>
     <Cell width={50} />
   </Row>;
   ```

3. **Métodos**  
   Tenemos los siguientes métodos para este componente

   - [width: number;](#width)
   - [label?: string;](#label)
   - [value?: string | null | undefined;](#value)
   - [inline?: boolean;](#inline)
   - [width_head?: number;](#width_head)
   - [width_content?: number;](#width_content)
   - [head_bold?: boolean;](#head_bold)
   - [height_head_cell?: number;](#height_head_cell)
   - [height_content_cell?: number;](#height_content_cell)
   - [br_head?: boolean;](#br_head)
   - [bb_head?: boolean;](#bb_head)
   - [bt_content?: boolean;](#bt_content)
   - [br_content?: boolean;](#br_content)
   - [br_cell?: boolean;](#br_cell)
   - [render_head?: () => JSX.Element;](#render_head)
   - [render_content?: () => JSX.Element;](#render_content)
   - [numeration?: string;](#numeration)
   - [page_indicator?: boolean;](#page_indicator)
   - [separator_pagination?: string;](#separator_pagination)
   - [variant_pagination?: VariantsPageIndicator;](#variant_pagination)
   - [style_wrap?: Style;](#style_wrap)
   - [style_head?: Style;](#style_head)
   - [style_content?: Style;](#style_content)
   - [hide_content?: boolean;](#hide_content)
   - [hide_head?: boolean;](#hide_head)
   - [children?: React.ReactNode;](#children)
   - [variant?: VariantRowAndCell;](#variant)

### **width**

- Uso

  ```jsx
  <Row top>
    <Cell width={50} />
    <Cell width={50} />
  </Row>
  ```

  > Resultado  
  > ![Cell width](/public/imgs/cell_width.png)

- Efecto  
  Este es el único método **requerido** y se encarga de definir el ancho que tomará cada componente dentro de la fila que da el componente Row.

- Caso de uso  
  Requerido en cada componente

### **label**

- Uso

  ```jsx
  <Row top>
    <Cell width={50} label="label 1" />
    <Cell width={50} label="label 2" />
  </Row>
  ```

  > Resultado  
  > ![Cell width](/public/imgs/cell_label.png)

- Efecto  
  Se usa para nombrar una sección.

- Caso de uso  
  Siempre y cuando la sección deba de llevar un label

### **value**

- Uso

  ```jsx
  <Row top>
    <Cell width={50} label="label 1" value="value 1" />
    <Cell width={50} label="label 2" value="value 2" />
  </Row>
  ```

  > Resultado  
  > ![Cell width](/public/imgs/cell_value.png)

- Efecto  
  Se usa para colocar los valores a la sección

- Caso de uso  
  Siempre y cuando la sección tenga un valor

### **inline**

- Uso

  ```jsx
  <Row top>
    <Cell width={50} label="label 1" value="value 1" inline />
    <Cell width={50} label="label 2" value="value 2" inline />
  </Row>
  ```

  > Resultado  
  > ![Cell width](/public/imgs/cell_inline_base.png)

- Efecto  
  Se usa para colocar las secciónes en formato horizontal, este método necesita los dos siguiente métodos: [width_head](#width_head) y [width_content](#width_content)

  Elimina el borde inferior ( border bottom ) de la sección head y coloca un borde a la derecha (border right) en está misma sección

- Caso de uso  
  Siempre y cuando la sección tenga que estar en formato horizontal

### **width_head**

- Uso

  ```jsx
  <Row top>
    <Cell width={50} label="label 1" value="value 1" inline width_head={50} />
    <Cell width={50} label="label 2" value="value 2" inline width_head={50} />
  </Row>
  ```

- Efecto  
  Hace que la sección head ocupe el porcentaje indicado dentro del componente.  
  Por ejemplo: el width de Cell es **50%**, al decirle al método width_head que ocupe un **50%** dentro de este, lo que ocurre es que la sección head mediría un **25%** dentro de la fila dada por Row

  > Resultado  
  > ![Cell width](/public/imgs/cell_inline_width_head.png)

- Caso de uso  
  Se usa para definir el ancho de head cuando se usa el método `inline`

### **width_content**

- Uso

  ```jsx
  <Row top>
    <Cell
      width={50}
      label="label 1"
      value="value 1"
      inline
      width_head={50}
      width_content={50}
    />
    <Cell
      width={50}
      label="label 2"
      value="value 2"
      inline
      width_head={50}
      width_content={50}
    />
  </Row>
  ```

- Efecto  
  Hace que la sección content ocupe el porcentaje indicado dentro del componente.

  > Resultado  
  > ![Cell width](/public/imgs/cell_inline_width_content.png)

- Caso de uso  
  Se usa para definir el ancho de content cuando se usa el método `inline`

### **head_bold** {#head_bold}

- Uso

  ```jsx
  <Row>
    <Cell width={100} head_bold={false} />
  </Row>
  ```

- Efecto  
  Este método afecta a la sección head y sirve para eliminar el efecto **negrita** del label

- Caso de uso  
  En caso de que no querramos que nuestro head este en negrita.

### **height_head_cell** {#height_head_cell}

- Uso

  ```jsx
  <Row>
    <Cell width={33.3} height_head_cell={28} />
    <Cell width={33.3} />
    <Cell width={33.4} />
  </Row>
  ```

- Efecto  
  Hace que la sección head tenga un alto específico.

  > Aplicando el método `height_head_cell` solo al primer componente Cell.  
  > ![Referencia](/public/imgs/cell_height_head_cell.png)

- Caso de uso  
  Cuando se quiere dar un alto específico a la sección head.

### **height_content_cell** {#height_content_cell}

- Uso

  ```jsx
  <Row></Row>
    <Cell width={100} height_content_cell={28} />
  </Row>
  ```

- Efecto  
  Hace lo mismo que el método anterior pero este aplica los cambios en la sección content

- Caso de uso  
  Cuando se tiene textos demasiados largos dentro del content de Cell, y se quiere colocar un alto para cada los componente.

### **br_head**

- Uso

  ```jsx
  <Row>
    <Cell width={100} br_head={false} />
    <Cell width={100} />
  </Row>
  ```

  > Resultado  
  > ![hide border right](/public/imgs/cell_head_br_only.png)

- Efecto  
  Elimina el borde de la derecha ( border right ) de la sección head

- Caso de uso  
  Especialmente cuando trabajados con el método [inline](#inline) de Cell y no necesitamos que haya la separación entre head y content.

### **bb_head**

- Uso

  ```jsx
  <Row>
    <Cell width={100} bb_head={false} />
    <Cell width={100} />
  </Row>
  ```

  > Resultado  
  > ![hide border right](/public/imgs/cell_head_bb_only.png)

- Efecto  
  Elimina el borde inferior ( border bottom ) de la sección head

- Caso de uso  
  Especialmente cuando no se necesita tener una separación entre head y content de Cell

### **bt_content**

- Uso

  ```jsx
  <Row>
    <Cell width={100} bt_content={false} />
  </Row>
  ```

- Efecto  
  Elimina el borde susperiores ( border top ) de la sección content

- Caso de uso  
  Únicamente se utiliza cuando se trabajada con [Variants](#variant)

### **br_content**

- Uso

  ```jsx
  <Row>
    <Cell width={100} bb_head={false} />
  </Row>
  ```

- Efecto  
  Elimina el borde de la derecha ( border right ) de la sección content

- Caso de uso  
  Únicamente se utiliza cuando se trabajada con [Variants](#variant)

### **br_cell**

- Uso

  ```jsx
  <Row>
    <Cell width={50} br_cell={false} />
    <Cell width={50} />
  </Row>
  ```

- Efecto  
  Elimina el borde de la derecha ( border right) del componente Cell
  ![alt text](/public/imgs/cell_br_only.png)

  > Utilizando el método `inline`  
  > ![alt text](/public/imgs/cell_br_only_inline.png)

- Caso de uso  
  Cuando no de require separación entre los diferentes componentes Cell pero más común cuando se trabajado con elementos `anidados`.

### **render_head**

- Uso

  ```jsx
  <Row top>
    <Cell
      width={50}
      value="content"
      render_head={() => (
        <Row top>
          <Cell width={50} label="label 2" />
          <Cell width={50} label="label 2" />
        </Row>
      )}
    />
    <Cell width={50} label="label 2" value="content" />
  </Row>
  ```

  > Resultado  
  > ![alt text](/public/imgs/cell_render_head_wrong.png)

  El resultado no esta mal pero tenemos bordes que se estan sobreponiendo, para arreglar esto hacemos uso de los siguientes métodos: [border](#border) y [br_cell](#br_cell)

  ```jsx
  <Row top>
    <Cell
      width={50}
      value="content"
      render_head={() => (
        <Row border={false}>
          <Cell width={50} label="label 2" />
          <Cell width={50} label="label 2" br_cell={false} />
        </Row>
      )}
    />
    <Cell width={50} label="label 2" value="content" />
  </Row>
  ```

  > ![alt text](/public/imgs/cell_render_head_good.png)

  **Importante:** `render_head` solo debe de renderizar un componente. Si se quiere renderizar varios componentes se debe de encapsular los hijos dentro de los simbolos `<> </>`

  ```jsx
  <Row top>
    <Cell
      width={50}
      value="content"
      render_head={() => (
        <>
          <Componente1></Componente1>
          <Componente2></Componente2>
        </>
      )}
    />
    <Cell width={50} label="label 2" value="content" />
  </Row>
  ```

- Efecto  
  Renderiza componentes dentro de la sección head

- Caso de uso  
  Para anidar elementos

### **render_content**

- Uso

  ```jsx
  <Row top>
    <Cell
      width={50}
      label="Label"
      render_content={() => (
        <Row top>
          <Cell width={50} label="label 2" />
          <Cell width={50} label="label 2" />
        </Row>
      )}
    />
    <Cell width={50} label="label 2" value="content" />
  </Row>
  ```

- Efecto  
  Funciona igual que [render_head](#render_head) con la diferencia de que los componentes se renderizan dentro de la sección `content`

- Caso de uso  
  Para anidar elementos

### **numeration**

- Uso

  ```jsx
  <Row top>
    <Cell width={50} label="Head" value="content" numeration="1" />
    <Cell width={50} label="Head" value="content" />
  </Row>
  ```

  > Resultado  
  > ![numeration imagen](/public/imgs/cell_numeration.png)

- Efecto  
  Sirve para añadir una enumeración en la sección head.

- Caso de uso  
  En casos especificos.

### **page_indicator**

- Uso

  ```jsx
  <Row top>
    <Cell width={100} label="label 1" page_indicator />
  </Row>
  ```

  > Resultado  
  > ![numeration imagen](/public/imgs/cell_page_indicator.png)

  **Nota**: el separador por defecto es: **-** (guion)

- Efecto  
  Muestra el total de páginas del PDF en formato `{númerDePagina} - {totalPáginas}`

- Caso de uso  
  Comúnmente en los encabezados o en los pie de página

### **separator_pagination**

- Uso

  ```jsx
  <Row top>
    <Cell width={100} label="label 1" page_indicator separator_pagination="/" />
  </Row>
  ```

- Efecto  
  Cambia el separador del formato.
  Ejemplo:

  > separator_pagination="/"  
  > `{númerDePagina} / {totalPáginas}`  
  > separator_pagination="de"  
  > `{númerDePagina} de {totalPáginas}`

- Caso de uso  
  En caso de que se quiera modificar el separador por defecto de [page_indicator](#page_indicator)

### **variant_pagination**

- Uso

  ```jsx
  <Row top>
    <Cell
      width={100}
      label="label 1"
      page_indicator
      variant_pagination={"verbose" | "standar"}
    />
  </Row>
  ```

- Efecto  
  Cambia el formato en que se muestra la páginación.  
  Se tiene dos tipos de variantes de paginación, `verbose` y `standar`

  - standar: formato por defecto. su formato es `{númerDePagina} - {totalPáginas}`
  - verbose: formato `PÁGINA {númerDePagina} DE {totalPáginas}`

- Caso de uso  
  En caso de que se quiera mostrar el páginado en otro formato diferente al de por defecto `standar`

### **style_wrap**

- Uso

  ```jsx
  <Row>
    <Cell width={100} style_wrap={{}} />
  </Row>
  ```

- Efecto  
  Aplica estilos personalizados a Cell.  
  Es igual que [global_style_wrap](#global_style_wrap) pero `style_wrap` tiene mayor peso ante `global_style_wrap` a la hora de renderizar estilos en el componente.

  [referecia de estilos permitidos](https://react-pdf.org/styling)

- Caso de uso  
  Cuando se tiene que dar estilos personalizados a un componente.

### **style_head**

- Uso

  ```jsx
  <Row>
    <Cell width={100} style_head={{}} />
  </Row>
  ```

- Efecto  
  Aplica estilos personalizados a la sección head del componente Cell.  
  Es igual que [global_style_head](#global_style_head) pero `style_head` tiene mayor peso ante `global_style_head` a la hora de renderizar estilos en el componente.

  [referecia de estilos permitidos](https://react-pdf.org/styling)

- Caso de uso  
  Cuando se tiene que dar estilos personalizados a la sección head.

### **style_content**

- Uso

  ```jsx
  <Row>
    <Cell width={100} style_content={{}} />
  </Row>
  ```

- Efecto  
  Aplica estilos personalizados a la sección content del componente Cell.  
   Es igual que [global_style_content](#global_style_content) pero `style_content` tiene mayor peso ante `global_style_content` a la hora de renderizar estilos en el componente.

  [referecia de estilos permitidos](https://react-pdf.org/styling)

- Caso de uso  
  Cuando se tiene que dar estilos personalizados a la sección content.

### **hide_content**

- Uso

  ```jsx
  <Row top>
    <Cell width={100} label="label 1" hide_content={{}} bb_head={false} />
  </Row>
  ```

  > Resultado  
  > ![hide content](/public/imgs/cell_hide_content.png)

  **Nota**: se debe de aplicar el método [bb_head](#bb_head) o [bb_head global](#bb_head-global) para eliminar el borde inferior de la sección head.

- Efecto  
  Elimina la sección `content`

- Caso de uso  
  Cuando el componente Cell no tiene valores.

### **hide_head**

- Uso

  ```jsx
  <Row top>
    <Cell width={100} value="value" hide_head={{}} />
  </Row>
  ```

- Efecto  
  Es igual que el método anterior pero este elimina la sección `head` y no hace falta utilizar otro método adicional como `bb_head`

- Caso de uso  
  Cuando el componente Cell no tiene valores.

### **children**

- Uso

  ```jsx
  <Row top>
    <Cell width={100}>{...hijos}</Cell>
  </Row>
  ```

- Efecto  
  Renderiza hijos dentro de Cell y no renderiza las secciones de `head` ni `content`

- Caso de uso  
  Especialmente cuando se desea renderizar otros componentes pero se quiere mantener la estructura de Cell

  ```jsx
  <Row top>
    <Cell width={50}>
      <Textarea value="Descripción" />
    </Cell>
    <Cell width={50} label="label 2" value="content 2">
  </Row>
  ```

  > Resultado  
  > ![children](/public/imgs/cell_children.png)

### **variant**

- Uso

  > Uso global para todos los hijos

  ```jsx
  <Row top variant={" "}>
    <Cell width={100} />
  </Row>
  ```

  > Uso individual

  ```jsx
  <Row top>
    <Cell width={100} variant={" "} />
  </Row>
  ```

- Efecto  
  Modifica los estilos de Cell.  
  Existes **tres** tipos de variantes

  > "grid" | "square" | "dotted";

  **Nota:** la variante por defecto es `grid`

  - **square:** Elimina los bordes de `Cell` y de la sección `head`, se añade bordes solo a la sección `content`

    > Formato `por defecto` e `inline`  
    > ![variant square](/public/imgs/cell_variants_square.png)

  - **dotted:** Elimina los bordes de `Cell` y de la sección `head`, se añade bordes inferiores solo a la sección `content`

    > Formato `por defecto` e `inline`  
    > ![variant square](/public/imgs/cell_variant_dotted.png)

- Caso de uso  
  En casos especiales

## HeadSection

1. **Estructura inicial**  
   La estructura de HeadSection es la siguiente  
   ![alt text](/public/imgs/head_section.png)  

2. **Uso**

   Se importa el componente y se renderiza

   ```jsx
   import { HeadSection } from "../../components/head_section";

   // ---
   <HeadSection label="" />;
   ```

3. **Métodos**

    - label: string;
    - bb?: boolean;
    - bt?: boolean;
    - break_section?: boolean;
    - style_wrap?: Style;
    - numeration?: string;

### label HeadSection

- Uso

  ```jsx
  <HeadSection label="" />
  ```

  **Nota:** Este método es requerido

- Efecto  
  Renderiza el título que le pasemos dentro del componente

- Caso de uso  
  Siempre

### bb HeadSection

- Uso

  ```jsx
  <HeadSection label="" bb />
  ```

- Efecto  
  Añade el borde inferior al componente

- Caso de uso  
  Cuando se desee tener el borde inferior

### bt HeadSection

- Uso

  ```jsx
  <HeadSection label="" bt={false} />
  ```

- Efecto  
  Elimina el borde superior al componente

- Caso de uso  
  Cuando no se desee tener el borde superior

### break_section HeadSection

- Uso

  ```jsx
  <HeadSection label="" break_section />
  ```

- Efecto  
  Provoca un salto de página

- Caso de uso  
  Cuando se necesita hacer un salto de página.

### style_wrap HeadSection

- Uso

  ```jsx
  <HeadSection label="" style_wrap={{}} />
  ```

- Efecto  
  Inserta estilos personalizados al componente

- Caso de uso  
  Cuando se desea tener estilos personalizados.

### numeration HeadSection

- Uso

  ```jsx
  <HeadSection label="" numeration={"1"} />
  ```

  > Resultado  
  ![numeration](/public/imgs/head_section_numeration.png)

- Efecto  
  Inserta una númeración en la parte superior izquierda sección

- Caso de uso  
  Cuando se desea tener estilos personalizados.

## Textarea

1. **Estructura inicial**  
   La estructura de Textarea es la siguiente  
   ![alt text](/public/imgs/textarea.png)  
   Este componente por defecto no trae ningun borde.

2. **Uso**

   Se importa el componente y se renderiza

   ```jsx
   import { Textarea } from "../../components/textarea";

   // ---
   <Textarea value="" />;
   ```

3. **Métodos**

   - [value: string | null | undefined;](#value-textarea)
   - [border?: boolean;](#border-textarea)
   - [bt?: boolean;](#bt-textarea)
   - [style?: Style;](#style-textarea)

### value textarea

- Uso

  ```jsx
  <Textarea value="" />
  ```

  **Nota:** Este método es requerido

- Efecto  
  Renderiza el valor que le pasemos dentro del componente

- Caso de uso  
  Cuando el valor es bastante largo.

### border textarea

- Uso

  ```jsx
  <Textarea value="" border />
  ```

- Efecto  
  Añade todos los bordes expecto el borde superior.

  ![border textarea](/public/imgs/textarea_border.png)

- Caso de uso  
  Específico.

### bt textarea

- Uso

  ```jsx
  <Textarea value="" bt />
  ```

- Efecto  
  Añade el borde superior.

- Caso de uso  
  Específico.

### style textarea

- Uso

  ```jsx
  <Textarea value="" style={{}} />
  ```

- Efecto  
  Aplica estilos personalizados al componente.
  [referecia de estilos permitidos](https://react-pdf.org/styling)

- Caso de uso  
  Específico.

## WrapOptions y Option

1. **Estructura inicial**  
   La estructura es la siguiente  
   ![alt text](/public/imgs/wrap_options.png)

   WrapOptions es un contenedor y Option es un item.

2. **Uso**

   Se importa el componente y se renderiza

   ```jsx
   import { WrapOptions, Option } from "../../components/options";

   // ---
   <WrapOptions>
     <Option />
   </WrapOptions>;
   ```

3. **Métodos**

   `WrapOptions`

   - [columns: number;](#columns)
   - [style_wrap?: Style;](#style_wrap-wrapoptions)
   - [width_content?: number;](#width_content-wrapoptions)
   - [reverse?: boolean;](#reverse-wrapoptions)
   - [global_style_option?: Style;](#global_style_option-wrapoptions)
   - [global_style_label?: Style;](#global_style_label-wrapoptions)
   - [global_style_square?: Style;](#global_style_square-wrapoptions)

   `Option`

   - [label: string;](#label-wrapoptions)
   - [selected?: boolean;](#selected-wrapoptions)
   - [style_option?: Style;](#style_option-wrapoptions)
   - [style_label?: Style;](#style_label-wrapoptions)
   - [style_square?: Style;](#style_square-wrapoptions)

### columns

- Uso

  ```jsx
  <WrapOptions columns={3}>
    <Option />
    <Option />
    <Option />
    <Option />
  </WrapOptions>
  ```

  **Nota:** Este método es requerido

- Efecto  
  Define el número de columnas que tendrá WrapOptions  
  ![columns ](/public/imgs/wrap_options_columns.png)

- Caso de uso  
  Siempre.

### style_wrap WrapOptions

- Uso

  ```jsx
  <WrapOptions columns={3} style_wrap={{}}>
    <Option />
  </WrapOptions>
  ```

- Efecto  
  Aplica estilos personalizados a WrapOptions.

  [referecia de estilos permitidos](https://react-pdf.org/styling)

- Caso de uso  
  Cuando se desea tener estilos personalizados.

### width_content WrapOptions

- Uso

  ```jsx
    <WrapOptions columns={3} width_content={}>
      <Option />
    </WrapOptions>;
  ```

- Efecto  
  Aplica un ancho especifico. los valores van del `1 al 100`

- Caso de uso  
  Cuando se desea tener un ancho especifico

### reverse WrapOptions

- Uso

  ```jsx
  <WrapOptions columns={3} reverse={true}>
    <Option />
  </WrapOptions>
  ```

- Efecto  
  Cambia el orden de Options

  ![reverse](/public/imgs/wrap_options_reverse.png)

- Caso de uso  
  Cuando se desea tener un orden distinto el componente Option

### global_style_option WrapOptions

- Uso

  ```jsx
  <WrapOptions columns={3} global_style_option={{}}>
    <Option />
  </WrapOptions>
  ```

- Efecto  
  Aplica estilos personalizados a todos sus hijos Options.

  [referecia de estilos permitidos](https://react-pdf.org/styling)

- Caso de uso  
  Cuando se desea tener estilos personalizados.

### global_style_label WrapOptions

- Uso

  ```jsx
  <WrapOptions columns={3} global_style_label={{}}>
    <Option />
  </WrapOptions>
  ```

- Efecto  
  Aplica estilos personalizados a la sección label de todos sus hijos Options.

  [referecia de estilos permitidos](https://react-pdf.org/styling)

- Caso de uso  
  Cuando se desea tener estilos personalizados.

### global_style_square WrapOptions

- Uso

  ```jsx
  <WrapOptions columns={3} global_style_square={{}}>
    <Option />
  </WrapOptions>
  ```

- Efecto  
  Aplica estilos personalizados a la sección square de todos sus hijos Options.

  [referecia de estilos permitidos](https://react-pdf.org/styling)

- Caso de uso  
  Cuando se desea tener estilos personalizados.

### label WrapOptions

- Uso

  ```jsx
  <WrapOptions columns={3}>
    <Option label="opción 1" />
  </WrapOptions>
  ```

  **Nota:** este método es requerido

- Efecto  
  Renderiza el texto de la opción

- Caso de uso  
  Siempre

### selected WrapOptions

- Uso

  ```jsx
  <WrapOptions columns={3}>
    <Option label="opción 1" selected />
    <Option label="opción 2" />
  </WrapOptions>
  ```

- Efecto  
  Hace que se marque la casilla cuadrada de la opción

- Caso de uso  
  Casos especiales

### style_option WrapOptions

- Uso

  ```jsx
  <WrapOptions columns={3}>
    <Option style_option={{}} />
  </WrapOptions>
  ```

- Efecto  
  Aplica estilos personalizados al componente.

  [referecia de estilos permitidos](https://react-pdf.org/styling)

- Caso de uso  
  Cuando se desea tener estilos personalizados.

### style_label WrapOptions

- Uso

  ```jsx
  <WrapOptions columns={3}>
    <Option style_label={{}} />
  </WrapOptions>
  ```

- Efecto  
  Aplica estilos personalizados a la sección label

  [referecia de estilos permitidos](https://react-pdf.org/styling)

- Caso de uso  
  Cuando se desea tener estilos personalizados.

### style_square WrapOptions

- Uso

  ```jsx
  <WrapOptions columns={3}>
    <Option style_square={{}} />
  </WrapOptions>
  ```

- Efecto  
  Aplica estilos personalizados a la sección square

  [referecia de estilos permitidos](https://react-pdf.org/styling)

- Caso de uso  
  Cuando se desea tener estilos personalizados.

## WrapImage e Img

1. **Estructura inicial**  
   La estructura es la siguiente  
   ![alt text](/public/imgs/wrap_images.png)

   WrapImage es un contenedor y Img es un item.

2. **Uso**

   Se importa el componente y se renderiza

   ```jsx
   import { WrapImage, Img } from "../../components/image_wrap";

   // ---
   <WrapImage>
     <Img />
   </WrapImage>;
   ```

3. **Métodos**

   `WrapImage`

    - [border?: boolean;](#border-wrapimage)
    - [top?: boolean;](#top-wrapimage)
    - [style_wrap?: Style;](#style_wrap-wrapimage)

   `Img`

    - [src?: string;](#src-wrapimage)
    - [description?: string;](#description-wrapimage)
    - [width?: number | string;](#width-wrapimage)
    - [height?: number | string;](#height-wrapimage)
    - [style_img?: Style;](#style_img-wrapimage)
    - [style_description?: Style;](#style_description-wrapimage)

### border WrapImage

- Uso

  ```jsx
  <WrapImage border={false}>
    <Img />
  </WrapImage>
  ```

- Efecto  
  Elimina los bordes de WrapImage

- Caso de uso  
  Cuando no se necesitan los bordes de WrapImage

### top WrapImage

- Uso

  ```jsx
  <WrapImage top>
    <Img />
  </WrapImage>
  ```

- Efecto  
  Agrega el borde superior

- Caso de uso  
  Cuando se necesitan el borde superior

### style_wrap WrapImage

- Uso

  ```jsx
  <WrapImage style_wrap={{}}>
    <Img />
  </WrapImage>
  ```

- Efecto  
  Aplica estilos personalizados

  [referecia de estilos permitidos](https://react-pdf.org/styling)

- Caso de uso  
  Cuando se desea tener estilos personalizados.

### src WrapImage

- Uso

  ```jsx
  <WrapImage>
    <Img src=" "/>
  </WrapImage>
  ```

  **Nota:** este método es requerido  

- Caso de uso  
  Para renderizar una imagen a traves de un link

### description WrapImage

- Uso

  ```jsx
  <WrapImage>
    <Img src=" " description=""/>
  </WrapImage>
  ```

- Caso de uso  
  En caso de que la imagen cuente con una descripción.

### width WrapImage

- Uso

  ```jsx
  <WrapImage>
    <Img src=" " width={}/>
  </WrapImage>
  ```

- Efecto  
  Coloca un ancho específico a la imagen, opciones permitidas `cualquier número` y el texto `auto`

- Caso de uso  
  En caso de que la imagen necesite un ancho específico.

### height WrapImage

- Uso

  ```jsx
  <WrapImage>
    <Img src=" " height={}/>
  </WrapImage>
  ```

- Efecto  
  Coloca un alto específico a la imagen, opciones permitidas `cualquier número` y el texto `auto`

- Caso de uso  
  En caso de que la imagen necesite un alto específico.

### style_img WrapImage

- Uso

  ```jsx
  <WrapImage>
    <Img src=" " style_img={{}} />
  </WrapImage>
  ```

- Efecto  
  Aplica estilos personalizados a la sección img

  [referecia de estilos permitidos](https://react-pdf.org/styling)

- Caso de uso  
  Cuando se desea tener estilos personalizados.

### style_description WrapImage

- Uso

  ```jsx
  <WrapImage>
    <Img src=" " style_description={{}} />
  </WrapImage>
  ```

- Efecto  
  Aplica estilos personalizados a la sección description

  [referecia de estilos permitidos](https://react-pdf.org/styling)

- Caso de uso  
  Cuando se desea tener estilos personalizados.

## Separator

1. **Estructura inicial**  
  Este componente es se usa para realizar separaciones entre otros componentes. Solo genera un espacio en blanco.

2. **Uso**

   Se importa el componente y se renderiza

   ```jsx
   import { Separator } from "../../components/separator";

   // ---
   <Separator />
   ```

3. **Métodos**

    - [margin: number;](#margin-separator)
    - [break_content?: boolean;](#break_content-separator)
    - [line?: boolean;](#line-separator)
    - [color_line?: string;](#color_line-separator)
    - [style_line?: "solid" | "dotted" | "dashed";](#style_line-separator)
    - [style_separator?: Style;](#style_separator-separator)

### margin Separator

- Uso

  ```jsx
     <Separator margin={} />
  ```

  **Nota:** Este método es requerido

- Efecto  
  Generar el tamaño la separación. Acepta solo números.

- Caso de uso  
  Siempre que se use el componente

### break_content Separator

- Uso

  ```jsx
     <Separator margin={} break_content/>
  ```

- Efecto  
  Provoca un salto de página

- Caso de uso  
  Cuando se necesite realizar un salto de página

### line Separator

- Uso

  ```jsx
     <Separator margin={} line/>
  ```

- Efecto  
  Genera una linea en medio de la separación.

- Caso de uso  
  Cuando se necesite tener un separación por una linea

### color_line Separator

- Uso

  ```jsx
     <Separator margin={} color_line=""/>
  ```

- Efecto  
  Da el color a la linea generada con el método anterior.

- Caso de uso  
  Siempre que se use el método `line`

### style_line Separator

- Uso

  ```jsx
     <Separator margin={} style_line=""/>
  ```

- Efecto  
  Da el estilo de linea que genera el método `line`, los valores permitidos son `solid`, `dotted` o `dashed`

- Caso de uso  
  Siempre que se use el método `line`

### style_separator Separator

- Uso

  ```jsx
     <Separator margin={} style_separator={{}}/>
  ```

- Efecto  
  Genera estilos personalizados al componente

- Caso de uso  
  Casos específicos

## Estilos globales

Configuración básica para los estilos globales para el PDF.  
Dentro de nuestro archivo **Render{NombrePDF}.tsx** debemos de configurar los estilos globales que usaremos.

```jsx
import { Document, PDFViewer, Page } from "@react-pdf/renderer";
import { globalStyles, theme } from "../../components/theme";

// se modifica el nombre de componente por el del archivo "Render[nombre-carpeta].tsx"
function RenderNombreArchivo() {
  // custom style

  return (
    <>
      <PDFViewer width={630} height={750}>
        <Document>
          <Page size={"A4"} style={globalStyles.page}>
            {/* contenido */}
          </Page>
        </Document>
      </PDFViewer>
    </>
  );
}

export default RenderNombreArchivo;
```

Primero debemos de importar `theme` del archivo `/components/theme.ts`
Una vez importado empezamos con la configuración.

Tenemos tres principales componentes a los cuales se les modifica los estilos `cell`, `head_section` y `Textarea`

1. Cell
   Estos cambios afectan directamente al componente [Cell](#cell)

   ```jsx
     import { Document, PDFViewer, Page } from "@react-pdf/renderer";
     import { globalStyles, theme } from "../../components/theme";

     function RenderNombreArchivo() {
       // custom style
       theme.cell
       ...
     }
   ```

   **theme.cell.bg_head:** Cambia el fondo de la sección `head` de  
    **theme.cell.color_head:** Cambia el color del texto de la sección `head`  
    **theme.cell.color_content:** Cambia el color del texto de la sección `content`  
    **theme.cell.text_align_head:** Cambia la alineación del texto de la sección `head`  
    **theme.cell.text_align_content:** Cambia la alineación del texto de la sección `content`  
    **theme.cell.fontFamily:** Cambia la fuente de la sección `head`. Los valores permitidos son **Helvetica-Bold** o **Helvetica**

2. HeadSection
   Estos cambios afectan directamente al componente [HeadSection](#cell)

   ```jsx
     import { Document, PDFViewer, Page } from "@react-pdf/renderer";
     import { globalStyles, theme } from "../../components/theme";

     function RenderNombreArchivo() {
       // custom style
       theme.head_section
       ...
     }
   ```

   **theme.head_section.bg:** Cambia el color de fondo  
    **theme.head_section.text_align:** Cambia la alineación del texto  
    **theme.head_section.color:** Cambia el color del texto
   **theme.head_section.border:** Cambia los estilos del borde  
    **theme.head_section.fontFamily:** Cambia la fuente. Los valores permitidos son **Helvetica-Bold** o **Helvetica**

3. Textarea
   Estos cambios afectan directamente al componente [Textarea](#cell)

   ```jsx
     import { Document, PDFViewer, Page } from "@react-pdf/renderer";
     import { globalStyles, theme } from "../../components/theme";

     function RenderNombreArchivo() {
       // custom style
       theme.textarea
       ...
     }
   ```

   **theme.textarea.min_height:** Cambia el alto, por defecto es 60. Este campo recibe un número como valor.  
    **theme.textarea.text_align:** Cambia la alineación del texto

Tambien existe estilos globales que son los siguientes.

**theme.border_color:** Cambia la color del borde de todos los componentes.  
**theme.border_style:** Cambia el estilo del borde de todos los componentes. Los valores validos son `solid`, `dotted` y `dashed`  
**theme.border_width:** Cambia ancho del borde de todos los componentes. Por defecto es `1px`  
**theme.fontSize:** Cambia el tamaño del texto de todos los componentes. Por defecto es `8px`
