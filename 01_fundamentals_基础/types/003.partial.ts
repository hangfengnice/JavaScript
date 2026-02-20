type Partial1<T> = { [P in keyof T]?: T[P] }

// 也可以直接用内置的
