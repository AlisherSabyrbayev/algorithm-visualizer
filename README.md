# Algorithm Visualizer

Небольшой проект на React + Vite для визуализации сортировок.

## Что есть

- генерация случайного массива
- настройка размера массива
- настройка скорости анимации
- Bubble / Merge / Quick / Insertion sort

## Запуск

```bash
npm install
npm run dev
```

## Сборка

```bash
npm run build
npm run preview
```

## Где что лежит

- `src/components/Visualizer.jsx` - основная логика визуализатора
- `src/components/Controls.jsx` - кнопки и слайдеры
- `src/sortingAlgorithms.js` - алгоритмы и шаги анимации
- `src/utils.js` - исполнение анимаций
