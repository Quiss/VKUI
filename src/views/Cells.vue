<template>
    <VKView activePanel={this.state.activePanel}>
        <VKPanel id="list">
            <VKPanelHeader>
                Ячейки
            </VKPanelHeader>

            <VKGroup title="Простейший пример">
                <VKList>
                    <VKCell>Пятница</VKCell>
                    <VKCell>Суббота</VKCell>
                    <VKCell>Воскресение</VKCell>
                </VKList>
            </VKGroup>

            <VKGroup title="Переходы">
                <VKList>
                    <VKCell expandable onClick={()
                    => this.setState({ activePanel: 'nothing' })}>Учетная запись</VKCell>
                    <VKCell expandable onClick={()
                    => this.setState({ activePanel: 'nothing' })}>Основные</VKCell>
                    <VKCell expandable onClick={()
                    => this.setState({ activePanel: 'nothing' })}>Приватность</VKCell>
                </VKList>
            </VKGroup>

            <VKGroup title="Индикатор">
                <VKList>
                    <VKCell expandable onClick={()
                    => this.setState({ activePanel: 'nothing' })} indicator="При использовании">Геолокация</VKCell>
                    <VKCell expandable onClick={()
                    => this.setState({ activePanel: 'nothing' })} indicator="Всегда">Автопроигрывание медиа</VKCell>
                    <VKCell expandable onClick={()
                    => this.setState({ activePanel: 'nothing' })} indicator="Выключены">Стикеры</VKCell>
                </VKList>
            </VKGroup>

            <VKGroup title="Многострочность">
                <VKList>
                    <VKCell multiline>A Series of Unfortunate Events, Archer, Brooklyn Nine-Nine, Doctor Who, Game of
                        Thrones
                    </VKCell>
                    <VKCell multiline>The Avalanches</VKCell>
                </VKList>
            </VKGroup>

            <VKGroup title="Подпись">
                <VKList>
                    <VKCell description="Depeche Mode">Where’s the Revolution</VKCell>
                    <VKCell description="The Weeknd">I Feel It Coming (Feat. Daft Punk)</VKCell>
                </VKList>
            </VKGroup>

            <VKGroup title="Большая ячейка">
                <VKList>
                    <VKCell
                            before={<VKAvatar size={72}/>
                        }
                        size="l"
                        description="Друзья в Facebook"
                        asideContent={
                        <VKIcon24MoreHorizontal/>
                        }
                        bottomContent={
                        <VKdiv style={{ display:
                        'flex' }}>
                        <VKButton size="m">Добавить</VKButton>
                        <VKButton size="m" level="secondary" style={{ marginLeft: 8 }}>Скрыть</VKButton>
                        </VKdiv>
                        }
                        >
                        Семён Ефимов
                    </VKCell>
                    <VKCell
                            before={<VKAvatar size={72}/>
                        }
                        size="l"
                        description="29 лет, Санкт-Петербург"
                        asideContent={
                        <VKIcon24MoreHorizontal/>
                        }
                        bottomContent={
                        <VKdiv style={{ display:
                        'flex' }}>
                        <VKButton size="m">Добавить</VKButton>
                        <VKButton size="m" level="secondary" style={{ marginLeft: 8 }}>Скрыть</VKButton>
                        </VKdiv>
                        }
                        >
                        Александр Попов
                    </VKCell>
                    <VKCell
                            before={<VKAvatar size={72}/>
                        }
                        size="l"
                        description="Команда ВКонтакте"
                        asideContent={
                        <VKIcon24MoreHorizontal/>
                        }
                        bottomContent={
                        <VKdiv style={{ display:
                        'flex' }}>
                        <VKButton size="m">Добавить</VKButton>
                        <VKButton size="m" level="secondary" style={{ marginLeft: 8 }}>Скрыть</VKButton>
                        </VKdiv>
                        }
                        >
                        Екатерина Скобейко
                    </VKCell>
                </VKList>
            </VKGroup>

            <VKGroup title="Иконки">
                <VKList>
                    <VKCell before={<VKIcon24About/>
                        }>Информация
                    </VKCell>
                    <VKCell before={<VKIcon24Services/>
                        }>Сервисы
                    </VKCell>
                </VKList>
            </VKGroup>

            <VKGroup title="Чекбоксы">
                <VKList>
                    <VKCell selectable before={
                    <VKAvatar size={40} src="https://pp.userapi.com/c841034/v841034569/3b8c1/pt3sOw_qhfg.jpg"/>
                    }>Артур Стамбульцян</VKCell>
                    <VKCell selectable before={
                    <VKAvatar size={40} src="https://pp.userapi.com/c841034/v841034569/3b8c1/pt3sOw_qhfg.jpg"/>
                    }>Тимофей Чаптыков</VKCell>
                    <VKCell selectable before={
                    <VKAvatar size={40} src="https://pp.userapi.com/c841034/v841034569/3b8c1/pt3sOw_qhfg.jpg"/>
                    }>Влад Анесов</VKCell>
                </VKList>
            </VKGroup>

            {this.state.removeList.length > 0 &&
            <VKGroup title="Удаление">
                <VKList>
                    {this.state.removeList.map((item, index) => (
                    <VKCell key={item} removable onRemove={()
                    => {
                    this.setState({
                    removeList: [...this.state.removeList.slice(0, index), ...this.state.removeList.slice(index + 1)]
                    })
                    }}>{item}</VKCell>
                    ))}
                </VKList>
            </VKGroup>
            }

            {this.state.removeList.length > 0 &&
            <VKGroup title="Перетаскивание">
                <VKList>
                    {this.state.draggingList.map((item) => (
                    <VKCell key={item} draggable onDragFinish={({ from, to })=> {
                        const draggingList = [...this.state.draggingList];
                        draggingList.splice(from, 1);
                        draggingList.splice(to, 0, this.state.draggingList[from]);
                        this.setState({ draggingList });
                        }}>{item}
                    </VKCell>
                    ))}
                </VKList>
            </VKGroup>
            }
        </VKPanel>
        <VKPanel id="nothing">
            <VKPanelHeader
                    left={
            <VKHeaderButton onClick={()
            => this.setState({ activePanel: 'list' })}>
            {osname === ANDROID ?
            <VKIcon24Back/>
            :
            <VKIcon28ChevronBack/>
            }
            </VKHeaderButton>
            }
            >
            Ничего
            </VKPanelHeader>
            <div :style="{ padding: '100px 0', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}">
                <div :style="{'flex': '0 0 auto', 'color': 'gray', textAlign: 'center'}">
                    Тут ничего нет
                    <br/>
                    <span @click="activePanel = 'list'" :style="{ textDecoration: 'underline' }">
                        Пошли обратно
                    </span>
                </div>
            </div>
        </VKPanel>
    </VKView>
</template>

<script>
    export default {
        name: 'Groups',
        data: () => {
            return {
                activePanel: 'list',
                removeList: ['Михаил Андриевский', 'Вадим Дорохов', 'Саша Колобов'],
                draggingList: ['Say', 'Hello', 'To', 'My', 'Little', 'Friend']
            }
        }
    }
</script>
