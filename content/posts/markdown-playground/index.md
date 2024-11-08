---
title: 'Markdown Playground'
description: 'A playground showing off various markdown features'
date: '2024-12-31'
slug: '/blog/markdown-playground'
tags:
  - 'markdown'
  - 'learning'
---

<a id="top"></a>

<div align='center' style="width: 100%; max-width: 640px; margin: 0 auto;">
  <iframe 
    src="https://giphy.com/embed/2UuE8KjnWpJOpp3id2" 
    width="100%" 
    height="100%" 
    style="aspect-ratio: 16/9;" 
    frameBorder="0" 
    class="giphy-embed" 
    allowFullScreen>
  </iframe>
</div>

- [Code](#code)
- [Headers](#headers)
- [Bold](#bold)
- [Italic](#italic)
- [Blockquotes](#blockquotes)
- [Lists](#lists)
- [Links](#links)
- [Emphasis](#emphasis)
- [Horizontal Rule](#horizontal-rule)
- [Line Break](#line-break)
- [Images](#images)
- [Tables](#tables)
- [Footnotes](#footnotes)
- [Definition Lists](#definition-lists)
- [Task Lists](#task-lists)
- [Emoji](#emoji)
- [HTML](#html)
- [Escaping](#escaping)
- [Backslash Escapes](#backslash-escapes)
- [Automatic URL Linking](#automatic-url-linking)
- [Strikethrough](#strikethrough)

<a id="code"></a>
<br />

---

## Code

````markdown
```javascript
function example() {
  console.log('Hello, world!');
}
```
````

```javascript
function example() {
  console.log('Hello, world!');
}
```

````
More examples...

  ```markdown
  ```python
  ```html
  ```css
  ```java
  ```c
  ```cpp
  ```bash
  ```shell
  ```yaml
  ```json
  ```markdown
  ```plaintext
  ```diff
  ```makefile
  ```dockerfile
  ```nginx
  ```apache
  ```apacheconf
````

<a id="headers"></a>
<br />

<a href="#top" style="float: right;">Back to top</a>

---

## Headers

```markdown
# Header 1

## Header 2

### Header 3

#### Header 4

##### Header 5
```

# Header 1

## Header 2

### Header 3

#### Header 4

##### Header 5

<a id="bold"></a>
<br />

<a href="#top" style="float: right;">Back to top</a>

---

## Bold

```markdown
**Bold Text**
```

**Bold Text**

<a id="italic"></a>
<br />

<a href="#top" style="float: right;">Back to top</a>

---

## Italic

```markdown
_Italic Text_
```

_Italic Text_

<a id="blockquotes"></a>
<br />

<a href="#top" style="float: right;">Back to top</a>

---

## Blockquotes

```markdown
> This is a blockquote.
```

> This is a blockquote.

<a id="lists"></a>
<br />

<a href="#top" style="float: right;">Back to top</a>

---

## Lists

Unordered list:

```markdown
- Item 1
- Item 2
```

- Item 1
- Item 2

<br />

Ordered list:

```markdown
1. First item
2. Second item
```

1. First item
2. Second item

<a id="links"></a>
<br />

<a href="#top" style="float: right;">Back to top</a>

---

## Links

```markdown
[OpenAI](https://openai.com)
```

[OpenAI](https://openai.com)

<a id="emphasis"></a>
<br />

<a href="#top" style="float: right;">Back to top</a>

---

## Emphasis

Bold and italic combined:

```markdown
**_Bold and Italic_**
```

**_Bold and Italic_**

<a id="horizontal-rule" ></a>
<br />

<a href="#top" style="float: right;">Back to top</a>

---

## Horizontal Rule

```markdown
---
```

---

<a id="line-break"></a>
<br />

<a href="#top" style="float: right;">Back to top</a>

---

## Line Break

```markdown
Line 1 <br /> Line 2
```

Line 1 <br /> Line 2

<a id="images"></a>
<br />

<a href="#top" style="float: right;">Back to top</a>

---

## Images

```markdown
![Alt Text](https://nicholasragland.com/favicons/web-app-manifest-512x512.png)
```

![Alt Text](https://nicholasragland.com/favicons/web-app-manifest-512x512.png)

```html
<img src="https://nicholasragland.com/assets/demo.gif" alt="Demo" />
```

<img src="https://nicholasragland.com/assets/logo-light.gif" alt="Demo" />

<a id="tables"></a>
<br />

<a href="#top" style="float: right;">Back to top</a>

---

## Tables

```markdown
| Column 1 | Column 2 | Column 3 |
| -------- | -------- | -------- |
| Row 1    | Data 1   | Data 2   |
| Row 2    | Data 3   | Data 4   |
```

| Column 1 | Column 2 | Column 3 |
| -------- | -------- | -------- |
| Row 1    | Data 1   | Data 2   |
| Row 2    | Data 3   | Data 4   |

<a id="footnotes"></a>
<br />

<a href="#top" style="float: right;">Back to top</a>

---

## Footnotes

```markdown
Here's a sentence with a footnote.[^1]

[^1]: This is the footnote text.
```

Here's a sentence with a footnote.[^1]

[^1]: This is the footnote text.

<a id="definition-lists"></a>
<br />

<a href="#top" style="float: right;">Back to top</a>

---

## Definition Lists

```markdown
Term 1
: Definition for term 1

Term 2
: Definition for term 2
```

Term 1
: Definition for term 1

Term 2
: Definition for term 2

<a id="task-lists"></a>
<br />

<a href="#top" style="float: right;">Back to top</a>

---

## Task Lists

```markdown
- [x] Task 1
- [ ] Task 2
```

- [x] Task 1
- [ ] Task 2

<a id="emoji"></a>
<br />

<a href="#top" style="float: right;">Back to top</a>

---

## Emoji

```markdown
🥺👾🤖👻
```

🥺👾🤖👻

<a id="html"></a>
<br />

<a href="#top" style="float: right;">Back to top</a>

---

## HTML

```markdown
<div>
    <h1>Heading</h1>
    <p>paragraph</p>
</div>
```

<div>
    <h1>Heading</h1>
    <p>paragraph</p> 
</div>

<a id="escaping"></a>
<br />

<a href="#top" style="float: right;">Back to top</a>

---

## Escaping

```markdown
\*Escaped asterisk\*
```

\*Escaped asterisk\*

<a id="backslash-escapes"></a>
<br />

<a href="#top" style="float: right;">Back to top</a>

---

## Backslash Escapes

```markdown
\*
\\
\`
\_
\{
\}
\[
\]
\(
\)
\#
\+
\-
\.
\!
```

\*

\\

\`

\_

ect.....

<a id="automatic-url-linking"></a>
<br />

<a href="#top" style="float: right;">Back to top</a>

---

## Automatic URL Linking

```markdown
https://openai.com
```

https://openai.com

<a id="strikethrough"></a>
<br />

<a href="#top" style="float: right;">Back to top</a>

---

## Strikethrough

```markdown
~~Strikethrough Text~~
```

~~Strikethrough Text~~

<a href="#top" style="float: right;">Back to top</a>

---

<br />
