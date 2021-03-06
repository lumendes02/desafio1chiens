import styled from 'styled-components';

export const Container2 = styled.div`
display: flex;
flex-wrap: wrap;
`

export const Container = styled.div`
    margin-top: 2rem;
    margin-left: 0.8rem;
    margin-right: 0.8rem;

    justify-content: center;

    ul {
        width: 30rem;
        border-radius: 0.25rem;
        border: 2px solid #d7d7d7;

        background-color: #EBECF0;

        h3 {
            text-align: center;
            color: #172B4D;
        }

        li {
            padding: 1rem;
            color: var(--text-body);
            background: var(--white);
            border: 0;
            border-radius: 0.25rem;
            margin: 10px;
            list-style: none;

            display: flex;
            justify-content: space-between;

            div {
                    display: flex;
                    justify-content: center;
                button {
                    font-size: 1rem;

                    background: transparent;
                    border: 0;

                    color: #ccc;

                    padding: 6px;

                    transition: 0.2s;

                    &:hover {
                        filter: brightness(0);
                    }
                }
            }
        }
    }
`;
