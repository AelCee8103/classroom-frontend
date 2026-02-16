export const DEPARTMENTS=[
    'CS',
    'Math',
    'English'
];


export const DEPARTMENT_OPTIONS = DEPARTMENTS.map((dept)=>({
    value: dept,
    label: dept,
}));

export const MOCK_SUBJECTS = [
    {
        id: 1,
        code: 'CS101',
        name: 'Introduction to Computer Science',
        department: 'CS',
        description: 'Fundamentals of programming and computer systems.',
        createdAt: new Date().toISOString(),
    },
    {
        id: 2,
        code: 'MATH201',
        name: 'Calculus II',
        department: 'Math',
        description: 'Advanced integration techniques and series.',
        createdAt: new Date().toISOString(),
    },
    {
        id: 3,
        code: 'ENG102',
        name: 'English Composition',
        department: 'English',
        description: 'Developing critical writing and analytical skills.',
        createdAt: new Date().toISOString(),
    },
];