<details>
    <summary>Что такое Data Transfer Object (DTO)?</summary>
    <div>
        <ul>
            <li>
                Data Transfer Object (DTO) — это объект, который используется для передачи данных между подсистемами приложения, сервером и клиентом, или между слоями в вашем приложении. DTO обычно является простой структурой данных без логики, которая просто содержит данные и, возможно, некоторые базовые методы для заполнения или извлечения данных. Основная цель DTO - уменьшить количество операций обмена данными, группируя данные вместе в одном объекте, что делает передачу данных более эффективной.
            </li>
        </ul>
        <pre>
            <code>
                class UserDTO {
                    firstName: string;
                    lastName: string;
                    email: string;

                    constructor(firstName: string, lastName: string, email: string) {
                        this.firstName = firstName;
                        this.lastName = lastName;
                        this.email = email;
                    }
                }

                // Функция для создания объекта UserDTO из исходных данных
                function createUserDTO(data: any): UserDTO {
                    return new UserDTO(data.firstName, data.lastName, data.email);
                }

                // Пример использования
                const rawData = {
                    firstName: "John",
                    lastName: "Doe",
                    email: "john.doe@example.com"
                };

                const userDTO = createUserDTO(rawData);
            </code>
        </pre>
    </div>

</details>
