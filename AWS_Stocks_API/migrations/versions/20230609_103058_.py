"""empty message

Revision ID: 14d785ba1560
Revises: 
Create Date: 2023-06-09 10:30:58.847405

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '14d785ba1560'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('stocks',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=40), nullable=False),
    sa.Column('symbol', sa.String(length=40), nullable=False),
    sa.Column('price', sa.String(), nullable=False),
    sa.Column('percent_change', sa.String(), nullable=False),
    sa.Column('market_cap', sa.String(), nullable=False),
    sa.Column('revenue', sa.String(), nullable=False),
    sa.Column('timestamp', sa.String(), nullable=True),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('name'),
    sa.UniqueConstraint('symbol')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('stocks')
    # ### end Alembic commands ###